import * as React from "react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yuborilmoqda...");

    const response = await fetch("https://mail.google.com/mail/u/0/#inbox", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    const data = await response.json();
    if (data.success) {
      setStatus("Xabar yuborildi!");
    } else {
      setStatus("Xatolik yuz berdi, qaytadan urinib ko'ring.");
    }
  };
  return (
      <div className="w-full h-full  p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
        <p className="underline underline-offset-16 decoration-sky-500 text-[20px] font-semibold font-[poppins]">
          Contact Me
        </p>
        <div className="mt-13">
          <form onSubmit={handleSubmit} className="flex items-center justify-center flex-wrap gap-3 font-[Poppins]">
            <input
              className="bg-neutral-950 h-[70px] w-[420px] p-3 rounded-[5px] outline-none"
              type="text"
              placeholder="Name *"
            />
            <input
              className="bg-neutral-950 h-[70px] w-[420px] p-3 rounded-[5px] outline-none"
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="bg-neutral-950 h-[70px] w-[855px] p-3 rounded-[5px] outline-none mt-5"
              type="password"
              placeholder="Password *"
            />
            <textarea
             placeholder="Xabaringizni yozing..."
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             required
              className="bg-neutral-950 h-[260px] w-[855px] p-3 rounded-[5px] outline-none mt-5 "
            ></textarea>
            <button
              className="bg-neutral-950 h-[70px] w-[855px] rounded-2xl mt-10 hover:text-blue-600 hover:border-2 "
            >
              Send Massage
            </button>
            </form>
          </div>
        </div>
  );
}

export default Login;
