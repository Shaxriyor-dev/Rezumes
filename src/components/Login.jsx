import { useState } from "react";
import * as React from "react";
import { motion } from "framer-motion";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [color, setColor] = useState("color");
  const [icon, setIcon] = useState("alert");

  const handleclick = () => {
    if (login == "admin" && password == "0000") {
      setColor("lime");
      setErr("Sizning loginningiz tog'ri");
      setIcon(<VerifiedRoundedIcon />);
      setTimeout(() => {
        navigator("/admins");
      }, 1000);
    } else {
      setColor("red");
      setIcon(<ErrorRoundedIcon />);
      setErr("Sizning loginningiz xato");
    }
  };
  return (
    <div className="flex items-center justify-center w-[910px] h-[100%] p-6 inset-ring-1 inset-ring-neutral-900 mt-10 rounded-lg bg-[#121212]">
      <div className="flex absolute right-0 top-0 p-10">
        <motion.div
          initial={{ x: "-2 00%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="  h-full"
        >
          {err && (
            <div
              className="p-3 px-10 flex items-center gap-3 rounded-sm"
              style={{ background: color, color: "#fff" }}
            >
              <p className=" font-[Ubuntu]" style={{ background: color }}>
                {icon}{" "}
              </p>{" "}
              {err}
            </div>
          )}
        </motion.div>
      </div>
      <div className="w-[550px]">
        <p className="text-2xl font-[Boldonse]">l m user sign in</p>
        <input
          style={{ border: `solid 1px  ${color}` }}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="text-lg text-white p-3 w-full font-[Poppins] outline-none border-2 rounded-sm mt-10"
          type="email"
          placeholder="Email inclusion"
        />
        <input
          style={{ border: `solid 1px ${color}` }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-lg text-white p-3 w-full font-[Poppins] outline-none border-2 rounded-sm mt-6"
          type="password"
          placeholder="Password inclusion"
        />
        <input
          onClick={handleclick}
          className="text-lg text-white p-3 w-full font-[Poppins] outline-none border-2 border-[lime] rounded-sm mt-10 bg-[lime]"
          type="button"
          value={"Sumbit"}
        />
      </div>
    </div>
  );
}

export default Login;
