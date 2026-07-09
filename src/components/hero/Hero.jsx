import studyBg from "../../assets/images/study-bg.png";
import DashboardPreview from "./DashboardPreview";

function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${studyBg})`,
        backgroundPosition: "left center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-slate-950/90"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-between gap-20 px-8 pb-16 pt-32 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-300">
            🚀 Your Personal AI Study Partner
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Study{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Smarter
            </span>
            <br />
            With AI
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Learn with AI-powered Notes, Flashcards, Quizzes,
            Study Planner and your own intelligent AI Tutor —
            all in one beautiful platform.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 text-white">

            <div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="text-gray-400">Students</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-400">Lessons</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">4.9★</h3>
              <p className="text-gray-400">Rating</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">

            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105">
              Get Started
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition duration-300 hover:bg-white/20">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side */}
        <DashboardPreview />

      </div>
    </section>
  );
}

export default Hero;