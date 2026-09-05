import TodoItem from "./TodoItem";

const ItemContainer = ({ todoItems, onDeleteClick, onToggleItem }) => {
  return (
    <div className="space-y-3">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todoName={item.name}
          todoDate={item.date}
          completed={item.completed}
          onDeleteClick={onDeleteClick}
          onToggleItem={onToggleItem}
        />
      ))}
    </div>
  );
};

export default ItemContainer;
