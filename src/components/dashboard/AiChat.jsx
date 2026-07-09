import { Send } from "lucide-react";
import MessageBubble from "./MessageBubble";

function AiChat() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

      {/* Header */}
      <div className="border-b border-white/10 p-5">
        <h2 className="text-2xl font-bold text-white">
          🤖 StudentGenius AI
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Ask anything. Your AI tutor is ready.
        </p>
      </div>

      {/* Messages */}
      <div className="h-[420px] space-y-5 overflow-y-auto p-6">

        <MessageBubble
          sender="ai"
          text="Hi! 👋 I'm your AI tutor. What would you like to learn today?"
        />

        <MessageBubble
          sender="user"
          text="Explain Newton's First Law."
        />

        <MessageBubble
          sender="ai"
          text="Newton's First Law states that an object remains at rest or in uniform motion unless acted upon by an external force."
        />

      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-5">
        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 rounded-xl border border-white/10 bg-[#111827] px-5 py-3 text-white outline-none placeholder:text-gray-500"
          />

          <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-5 text-white transition hover:scale-105">
            <Send size={20} />
          </button>

        </div>
      </div>

    </div>
  );
}

export default AiChat;