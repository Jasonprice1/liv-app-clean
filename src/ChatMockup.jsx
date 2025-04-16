import { useState } from "react";

export default function ChatMockup() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "hey u good?" },
    { sender: "user", text: "Not much, just pretending to text someone lol" }
  ]);

  return (
    <div style={{ padding: '1rem' }}>
      {messages.map((msg, index) => (
        <p key={index}>
          <strong>{msg.sender}:</strong> {msg.text}
        </p>
      ))}
    </div>
  );
}
