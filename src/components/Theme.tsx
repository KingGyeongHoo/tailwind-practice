import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Theme = ({
  themes,
  setTheme,
}: {
  themes: Theme[];
  setTheme: (item: Theme) => void;
}) => {
  const [selected, setSelected] = useState(0);
  const clickHandler = (idx: number, item: Theme) => {
    setSelected(idx);
    setTheme(item);
  };
  return (
    <nav
      className={twMerge(
        "absolute top-0 left-0 flex flex-row items-center w-2/4 h-20 p-4"
      )}
    >
      <span>테마 선택</span>
      <ul className="flex flex-row ml-8 gap-6">
        {themes.map((item: Theme, idx: number) => {
          return (
            <li
              className="flex flex-col items-center gap-0.5"
              onClick={() => clickHandler(idx, item)}
            >
              <div
                className={twMerge(
                  "w-8 h-8 border rounded-[100px]",
                  item.bgColor
                )}
              />
              <span
                className={twMerge(
                  "text-gray-400",
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
