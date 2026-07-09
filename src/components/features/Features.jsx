import {
  Brain,
  BookOpen,
  ClipboardCheck,
  Calendar,
  BarChart3,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    desc: "Get instant explanations for any question with your personal AI tutor.",
  },
  {
    icon: BookOpen,
    title: "Smart Notes",
    desc: "Generate beautiful notes automatically from any topic.",
  },
  {
    icon: ClipboardCheck,
    title: "AI Quiz",
    desc: "Practice with personalized quizzes based on your progress.",
  },
  {
    icon: Calendar,
    title: "Study Planner",
    desc: "Organize your daily study routine with AI assistance.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Track your learning with detailed analytics and insights.",
  },
  {
    icon: Sparkles,
    title: "Flashcards",
    desc: "Memorize concepts faster with interactive flashcards.",
  },
];

function Features() {
  return (
    <section className="bg-[#030712] py-28 px-8">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            FEATURES
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            One Platform.
            <span className="text-cyan-400"> Everything You Need.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Everything a modern student needs to learn faster, stay organized,
            and achieve better results with AI.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Features;