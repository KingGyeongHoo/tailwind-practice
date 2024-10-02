import { useState } from "react";
import Card from "./components/Card";
import Theme from "./components/Theme";
import { themes } from "./data/themeData";
export default function App() {
  const [theme, setTheme] = useState(themes[0]);
  return (
    <>
      <div className="relative flex justify-center items-center w-[100%] h-[100vh]">
        <Theme themes={themes} setTheme={setTheme} />
        <Card theme={theme} />
      </div>
    </>
  );
}
