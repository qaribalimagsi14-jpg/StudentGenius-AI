function Login() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-6">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">

        {/* Logo */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-3xl">
            🎓
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-400">
            Sign in to StudentGenius AI
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 font-bold text-white transition hover:scale-[1.02]"
          >
            Sign In
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <button
            type="button"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <span className="cursor-pointer text-cyan-400 hover:text-cyan-300">
              Sign Up
            </span>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;