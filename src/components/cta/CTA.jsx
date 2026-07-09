function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#030712] px-8 py-28">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-gradient-to-r from-cyan-600/20 to-blue-700/20 p-16 backdrop-blur-xl">

        <div className="text-center">

          <h2 className="text-5xl font-black text-white">
            Ready to Study
            <span className="text-cyan-400"> Smarter?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Join thousands of students using StudentGenius AI to learn
            faster, stay organized, and achieve better grades.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold text-white transition hover:scale-105">
              Get Started Free
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white hover:bg-white/20">
              Book Demo
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;