function DashboardPreview() {
  return (
    <div className="w-full max-w-xl rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Welcome back</p>
          <h2 className="mt-1 text-3xl font-bold text-white">
            Qarib 👋
          </h2>
        </div>

        <div className="h-4 w-4 rounded-full bg-green-400 shadow-lg shadow-green-500 animate-pulse"></div>
      </div>

      {/* Today's Goal */}
      <div className="mt-10">
        <div className="mb-3 flex justify-between">
          <span className="text-gray-300">Today's Goal</span>
          <span className="font-bold text-white">80%</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-700">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <p className="text-sm text-gray-400">Study Streak</p>
          <h3 className="mt-3 text-2xl font-bold text-white">
            🔥 15 Days
          </h3>
        </div>

        <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
          <p className="text-sm text-gray-400">AI Tutor</p>
          <h3 className="mt-3 text-2xl font-bold text-green-400">
            ● Online
          </h3>
        </div>

      </div>

      {/* Subjects */}
      <div className="mt-8">

        <h3 className="mb-4 text-lg font-semibold text-white">
          Subjects
        </h3>

        <div className="space-y-4">

          <div>
            <div className="mb-1 flex justify-between text-sm text-gray-300">
              <span>Mathematics</span>
              <span>92%</span>
            </div>

            <div className="h-2 rounded-full bg-slate-700">
              <div className="h-2 w-[92%] rounded-full bg-cyan-400"></div>
            </div>
          </div>

          <div>
            <div className="mb-1 flex justify-between text-sm text-gray-300">
              <span>Physics</span>
              <span>80%</span>
            </div>

            <div className="h-2 rounded-full bg-slate-700">
              <div className="h-2 w-[80%] rounded-full bg-purple-500"></div>
            </div>
          </div>

          <div>
            <div className="mb-1 flex justify-between text-sm text-gray-300">
              <span>Chemistry</span>
              <span>70%</span>
            </div>

            <div className="h-2 rounded-full bg-slate-700">
              <div className="h-2 w-[70%] rounded-full bg-pink-500"></div>
            </div>
          </div>

        </div>

      </div>

      {/* Weekly Activity */}
      <div className="mt-8">

        <h3 className="mb-4 text-lg font-semibold text-white">
          Weekly Activity
        </h3>

        <div className="flex h-28 items-end justify-between gap-2">

          <div className="w-6 rounded-t-xl bg-cyan-400" style={{ height: "45%" }}></div>
          <div className="w-6 rounded-t-xl bg-cyan-400" style={{ height: "70%" }}></div>
          <div className="w-6 rounded-t-xl bg-cyan-400" style={{ height: "90%" }}></div>
          <div className="w-6 rounded-t-xl bg-cyan-400" style={{ height: "55%" }}></div>
          <div className="w-6 rounded-t-xl bg-cyan-400" style={{ height: "100%" }}></div>
          <div className="w-6 rounded-t-xl bg-cyan-400" style={{ height: "75%" }}></div>
          <div className="w-6 rounded-t-xl bg-cyan-400" style={{ height: "60%" }}></div>

        </div>

      </div>

      {/* AI Assistant */}
      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-5">

        <p className="text-sm text-gray-300">
          🤖 AI Assistant
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          Ready to help you study
        </h3>

        <button className="mt-4 rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700">
          Ask AI
        </button>

      </div>

    </div>
  );
}

export default DashboardPreview;