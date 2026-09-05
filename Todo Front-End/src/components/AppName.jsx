function AppName() {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-linear-to-br from-violet-600 to-indigo-600 shadow-lg shadow-indigo-500/30">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4" />
        </svg>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent sm:text-5xl">
        Todo App
      </h1>
      <p className="mt-2 text-slate-500 font-medium">
        Plan your day, crush your goals
      </p>
    </div>
  );
}

export default AppName;