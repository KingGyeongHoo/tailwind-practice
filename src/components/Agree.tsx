import { twMerge } from "tailwind-merge";

export const Agree = ({ className, agreeFor, children }: Agree) => {
  console.log(className);
  return (
    <div className="w-[240px] h-[20px] flex flex-row items-center">
      <input
        type="checkbox"
        id={agreeFor}
        className={twMerge(
          "appearance-none w-[20px] h-[20px] border rounded-[100px] checked:bg-[url('../img/check.svg')] checked:bg-no-repeat checked:bg-center",
          className
        )}
      ></input>
      <label htmlFor={agreeFor} className="text-sm text-[#4F4F4F]">
        {children}
      </label>
    </div>
  );
};
export default Agree;
