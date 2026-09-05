import { useState } from "react";

function AddTodo({ onTodoItems }) {
  const [todoName, setToDoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todoName.trim() || !dueDate) return;
    onTodoItems(todoName.trim(), dueDate);
    setToDoName("");
    setDueDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        placeholder="Enter Todo Here"
        value={todoName}
        onChange={handleNameChange}
        className="flex-1 rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder-slate-400 transition focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-200"
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDateChange}
        className="rounded-xl border-2 border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 transition focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-200 sm:min-w-44"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/40 active:translate-y-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo;
