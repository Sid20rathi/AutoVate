import { useState, useEffect, ReactNode } from "react";
import TypingAnimation from "./ui/typing-animation";

export function TypingAnimationDemo() {
  const [showSecondAnimation, setShowSecondAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondAnimation(true);
    }, 6000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div>
      <TypingAnimation
        className="text-7xl font-bold text-black dark:text-white"
        text="Build powerful workflows"
      />
      {showSecondAnimation && (
        <TypingAnimation
          className="text-7xl font-bold text-black dark:text-white"
          text="incredibly fast"
        />
      )}
      <div className="m-4">
      {showSecondAnimation && (
        <TypingAnimation
          className="text-2xl font-bold text-black dark:text-white"
          text="Start an automation by connecting two apps — a trigger and an action"
        />
      )}
      </div>
     
    </div>
  );
}
