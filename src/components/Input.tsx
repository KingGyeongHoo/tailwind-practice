import { twMerge } from "tailwind-merge";

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return (
    <input
      className={twMerge(
        "w-[325px] h-[44px] px-[16px] py-[14px] border border-gray-500 placeholder:text-gray-300 rounded-lg",
        className
      )}
      {...rest}
    ></input>
  );
};
export default Input;
