import { twMerge } from "tailwind-merge";

export const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;
  return (
    <input
      className={twMerge(
        `flex justify-center items-center w-[325px] h-[44px] px-[20px] py-[14px] text-sm border border-gray-300 rounded-lg`,
        className
      )}
      {...rest}
    ></input>
  );
};
export default Button;
