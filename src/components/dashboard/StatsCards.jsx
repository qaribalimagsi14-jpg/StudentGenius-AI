import { Brain, BookOpen, Flame, Target } from "lucide-react";

function StatsCards() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <Brain className="text-cyan-400" size={34} />
        <h2 className="mt-5 text-3xl font-bold text-white">28</h2>
        <p className="mt-2 text-gray-400">AI Sessions</p>
      </div>

      <div className="rounded-3xl border border-blue-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <BookOpen className="text-blue-400" size={34} />
        <h2 className="mt-5 text-3xl font-bold text-white">142</h2>
        <p className="mt-2 text-gray-400">Notes Created</p>
      </div>

      <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <Flame className="text-orange-400" size={34} />
        <h2 className="mt-5 text-3xl font-bold text-white">15 Days</h2>
        <p className="mt-2 text-gray-400">Study Streak</p>
      </div>

      <div className="rounded-3xl border border-green-500/20 bg-white/5 p-6 backdrop-blur-xl">
        <Target className="text-green-400" size={34} />
        <h2 className="mt-5 text-3xl font-bold text-white">82%</h2>
        <p className="mt-2 text-gray-400">Weekly Goal</p>
      </div>

    </div>
  );
}

export default StatsCards;