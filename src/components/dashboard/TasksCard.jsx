function TasksCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

      <h2 className="text-2xl font-bold text-white">
        Today's Tasks
      </h2>

      <div className="mt-6 space-y-4">

        <div className="rounded-xl bg-white/5 p-4 text-gray-300">
          ✅ Complete SAT Math Practice
        </div>

        <div className="rounded-xl bg-white/5 p-4 text-gray-300">
          📖 Read Penn Foster Lesson
        </div>

        <div className="rounded-xl bg-white/5 p-4 text-gray-300">
          🤖 Ask AI Tutor 5 Questions
        </div>

      </div>

    </div>
  );
}

export default TasksCard;