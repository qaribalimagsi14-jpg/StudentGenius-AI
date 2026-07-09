import {
  LayoutDashboard,
  BookOpen,
  Brain,
  ClipboardList,
  Calendar,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, title: "Dashboard" },
  { icon: Brain, title: "AI Tutor" },
  { icon: BookOpen, title: "Notes" },
  { icon: ClipboardList, title: "Quiz" },
  { icon: Calendar, title: "Planner" },
  { icon: Settings, title: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-[#0B1120] p-6">

      <h1 className="mb-10 text-2xl font-black text-white">
        🎓 StudentGenius
      </h1>

      <nav className="space-y-3">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              <Icon size={20} />
              {item.title}
            </button>
          );
        })}

      </nav>

    </aside>
  );
}

export default Sidebar;