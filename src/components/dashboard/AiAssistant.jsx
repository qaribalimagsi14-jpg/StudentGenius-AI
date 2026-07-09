function AiAssistant() {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 p-8">

      <h2 className="text-3xl font-bold text-white">
        🤖 AI Study Assistant
      </h2>

      <p className="mt-3 max-w-2xl text-gray-300">
        Ask any question, generate notes, create quizzes,
        summarize chapters, or plan your study schedule.
      </p>

      <button className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-white transition hover:scale-105">
        Open AI Tutor
      </button>

    </div>
  );
}

export default AiAssistant;