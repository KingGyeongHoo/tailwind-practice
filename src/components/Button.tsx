export const Button = ({ mainText, bgColor, textColor }: Button) => {
  return (
    <div
      className={`flex justify-center items-center w-[325px] h-[44px] px-[20px] py-[14px] ${bgColor} ${textColor} text-sm border border-[#4F4F4F] rounded-lg`}
    >
      {mainText}
    </div>
  );
};
export default Button;
