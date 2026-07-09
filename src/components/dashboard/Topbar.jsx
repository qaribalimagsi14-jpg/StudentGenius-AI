import { Search, Bell } from "lucide-react";

function Topbar() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">

        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white outline-none placeholder:text-gray-500"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="rounded-xl bg-white/5 p-3 text-white">
          <Bell size={20} />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white">
          D
        </div>

      </div>

    </div>
  );
}

export default Topbar;