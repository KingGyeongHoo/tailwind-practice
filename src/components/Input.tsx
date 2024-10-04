import { twMerge } from "tailwind-merge";

export const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  return (
    <input
      className={twMerge(
        "w-[325px] h-[44px] px-[16px] py-[14px] border outline-gray-300 text-gray-400 placeholder:text-gray-300 rounded-lg",
        className
      )}
      {...rest}
    ></input>
  );
};
export default Input;
