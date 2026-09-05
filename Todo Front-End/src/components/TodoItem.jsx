function TodoItem({ id, todoName, todoDate, completed = false, onDeleteClick, onToggleItem }) {
  const formattedDate = new Date(todoDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 transition ${
        completed
          ? "border-emerald-200 bg-emerald-50/60"
          : "border-slate-200 bg-white hover:border-violet-200 hover:shadow-md hover:shadow-violet-100"
      }`}
    >
      <button
        type="button"
        onClick={() => onToggleItem(id)}
        title={completed ? "Mark as not done" : "Mark as done"}
        className={`flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition ${
          completed
            ? "border-emerald-500 bg-emerald-500 text-white"
            : "border-slate-300 text-transparent hover:border-emerald-400"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={`truncate font-medium ${
            completed ? "text-slate-400 line-through" : "text-slate-800"
          }`}
        >
          {todoName}
        </p>
        <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          {formattedDate}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDeleteClick(id)}
        className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
