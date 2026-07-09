function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-xl shadow-lg shadow-blue-500/40">
            🎓
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              StudentGenius AI
            </h1>
            <p className="text-xs text-gray-400">
              Study Smarter
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li className="cursor-pointer hover:text-blue-400 transition">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Features</li>
          <li className="cursor-pointer hover:text-blue-400 transition">About</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition">
            Login
          </button>

          <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;