import { FormEvent, useState } from "react";

import { AiOutlineSend } from "react-icons/ai";

import { socket } from "@/common/lib/socket";

const ChatInput = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedMessage = msg.trim();
    if (!trimmedMessage) return;

    socket.emit("send_msg", trimmedMessage);

    setMsg("");
  };

  return (
    <form className="flex w-full items-center gap-2" onSubmit={handleSubmit}>
      <input
        className="w-full rounded-xl border border-zinc-300 p-5 py-1"
        value={msg}
        aria-label="Chat message"
        placeholder="Type a message"
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        className="btn-icon h-full w-10 bg-[#8b3dff]"
        type="submit"
        aria-label="Send message"
        disabled={!msg.trim()}
      >
        <AiOutlineSend />
      </button>
    </form>
  );
};

export default ChatInput;
