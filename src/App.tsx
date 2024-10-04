import { useState } from "react";
import Card from "./components/Card";
import Theme from "./components/Theme";
import { BackGround } from "./components/BackGround";
export default function App() {
  const [theme, setTheme] = useState({
    name: "Red",
    bgColor: "bg-red-500",
    darkBgColor: "bg-red-700",
    checkedBgColor: "checked:bg-red-500",
    borderColor: "border-red-500",
    outlineColor: "outline-red-300",
    textColor: "text-red-500",
  });
  return (
    <>
      <div className="relative flex justify-center items-center w-[100%] h-[100vh] bg-gray-100">
        <Theme setTheme={setTheme} />
        <Card theme={theme} />
        <BackGround theme={theme} />
      </div>
    </>
  );
}
