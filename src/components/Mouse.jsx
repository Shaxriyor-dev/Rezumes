import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });


  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - -10, 
      y: mousePosition.y - -10, 
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <div>
    <motion.div
  variants={cursorVariants}
  animate="default"
  className="cursors ring-4 ring-indigo-300  shadow-indigo-500/40"
  style={{
    position: "fixed",
    top: "-10px",
    left: "-10px", 
    width: "60px",  
    height: "60px", 
    borderRadius: "50%", 
    backgroundColor: "linear-gradient(45deg, #ff6347, #ffd700)", 
    pointerEvents: "none", 
    zIndex: 9999,
  }}
></motion.div>


     

      
    </div>
  );
}

export default Home;
