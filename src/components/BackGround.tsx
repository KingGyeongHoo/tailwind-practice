import { twMerge } from "tailwind-merge";

export const BackGround = ({ theme }: { theme: Theme }) => {
  const { darkBgColor } = theme;
  return (
    <div className="absolute top-0 left-0 z-0 w-[100%] h-[100%]  overflow-hidden">
      <div
        className={twMerge(
          "absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-r from-rose-400 to-transparent",
          darkBgColor
        )}
      />
    </div>
  );
};
