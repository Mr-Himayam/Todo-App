import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ItemContainer from "./components/ItemContainer";
import ErrorMessage from "./components/ErrorMessage";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemToServer,
  markCompletedOnServer,
} from "./services/ItemServices";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemToServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleTodoItems = async (newItems, newDate) => {
    if (!newItems || !newDate) return;
    const serverItem = await addItemToServer(newItems, newDate);
    setTodoItems((prev) => [...prev, serverItem]);
  };

  const handleDeleteItems = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    setTodoItems((prev) => prev.filter((item) => item.id !== deletedId));
  };

  const handleToggleItem = async (id) => {
    const updatedItem = await markCompletedOnServer(id);
    setTodoItems((prev) =>
      prev.map((item) => (item.id === id ? updatedItem : item)),
    );
  };

  const completedCount = todoItems.filter((item) => item.completed).length;
  const percentCompleted = todoItems.length
    ? Math.round((completedCount / todoItems.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-violet-800 flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur rounded-3xl shadow-2xl shadow-indigo-950/40 p-6 sm:p-10">
        <AppName />
        <AddTodo onTodoItems={handleTodoItems} />

        {todoItems.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-slate-500">
                {completedCount} of {todoItems.length} completed
              </p>
              <p className="text-sm font-semibold text-violet-600">{percentCompleted}%</p>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-linear-to-r from-violet-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${percentCompleted}%` }}
              />
            </div>
          </div>
        )}

        {todoItems.length === 0 && <ErrorMessage />}
        <ItemContainer
          todoItems={todoItems}
          onDeleteClick={handleDeleteItems}
          onToggleItem={handleToggleItem}
        />
      </div>
    </div>
  );
}

export default App;
