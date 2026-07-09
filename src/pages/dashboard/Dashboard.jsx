import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

import StatsCards from "../../components/dashboard/StatsCards";
import AiAssistant from "../../components/dashboard/AiAssistant";
import TasksCard from "../../components/dashboard/TasksCard";
import NotesCard from "../../components/dashboard/NotesCard";
import QuickActions from "../../components/dashboard/QuickActions";
import AiChat from "../../components/dashboard/AiChat";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#030712]">
      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        {/* Welcome */}
        <div className="mt-8">
          <h1 className="text-4xl font-black text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-400">
            Ready to continue your learning journey?
          </p>
        </div>

        {/* Stats */}
        <StatsCards />

        {/* AI Assistant */}
        <AiAssistant />

        {/* Bottom Cards */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <TasksCard />
          <NotesCard />
          <QuickActions />
        </div>

        {/* AI Chat */}
        <div className="mt-10">
          <AiChat />
        </div>

      </main>
    </div>
  );
}

export default Dashboard;