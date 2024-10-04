import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { themes } from "../data/themeData";

const Theme = ({ setTheme }: { setTheme: (item: Theme) => void }) => {
  const [selected, setSelected] = useState(0);
  const [themeOpen, setThemeOpen] = useState(false);
  const clickHandler = (idx: number, item: Theme) => {
    setSelected(idx);
    setTheme(item);
  };
  const themeNavBarHandler = () => {
    setThemeOpen((themeOpen) => !themeOpen);
  };
  return (
    <nav
      className={twMerge(
        "absolute top-[80%] left-[90%] z-10 flex flex-col-reverse gap-4 items-center w-fit h-20 text-white p-4 translate-x-[-50%]"
      )}
    >
      <div
        className={twMerge(
          "rounded-[100px] w-fit p-3",
          themes[selected].bgColor
        )}
        onClick={themeNavBarHandler}
      >
        <span className="text-sm font-bold">테마 선택</span>
      </div>
      <ul
        className={twMerge(
          "flex flex-col gap-4",
          themeOpen ? "animate-fadeIn" : "animate-fadeOut"
        )}
      >
        {themes.map((item: Theme, idx: number) => {
          return (
            <li
              className="flex flex-col items-center gap-0.5"
              onClick={() => clickHandler(idx, item)}
            >
              <div
                className={twMerge(
                  "w-6 h-6 border rounded-[100px]",
                  item.bgColor
                )}
              />
              <span
                className={twMerge(
                  "text-gray-200 drop-shadow-md",
                  selected === idx && item.textColor,
                  "font-bold"
                )}
              >
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Theme;
