export const Input = ({ type, placeholder }: Input) => {
  return (
    <input
      className="w-[325px] h-[44px] px-[16px] py-[14px] border border-[#4F4F4F] rounded-lg"
      type={type}
      placeholder={placeholder}
    ></input>
  );
};
export default Input;
