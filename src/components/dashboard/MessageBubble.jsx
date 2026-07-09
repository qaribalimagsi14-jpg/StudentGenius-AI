function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-cyan-600 text-white"
            : "bg-white/10 text-gray-200"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;