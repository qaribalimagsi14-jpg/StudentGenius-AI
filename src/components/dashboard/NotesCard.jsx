function NotesCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h2 className="text-2xl font-bold text-white">
        Recent Notes
      </h2>

      <div className="mt-6 space-y-4">

        <div className="rounded-xl bg-cyan-500/10 p-4">
          <h3 className="font-semibold text-white">
            Biology Chapter 5
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Updated 2 hours ago
          </p>
        </div>

        <div className="rounded-xl bg-purple-500/10 p-4">
          <h3 className="font-semibold text-white">
            Algebra Formula Sheet
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Yesterday
          </p>
        </div>

      </div>

    </div>
  );
}

export default NotesCard;