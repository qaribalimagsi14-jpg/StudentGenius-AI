function QuickActions() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h2 className="text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="mt-6 grid gap-4">

        <button className="rounded-xl bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-500">
          + Generate Notes
        </button>

        <button className="rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-500">
          + Create Quiz
        </button>

        <button className="rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-500">
          + Open AI Tutor
        </button>

      </div>

    </div>
  );
}

export default QuickActions;