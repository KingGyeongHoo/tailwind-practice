export const Agree = ({ agreeFor, children }: Agree) => {
  return (
    <div className="w-[240px] h-[20px] flex flex-row justify-between items-center">
      <input
        type="checkbox"
        id={agreeFor}
        className="appearance-none w-[20px] h-[20px] border border-[#4F4F4F] rounded-[5px] checked:bg-[#4F4F4F] checked:bg-[url('../img/check.svg')] checked: bg-no-repeat checked:bg-center"
      ></input>
      <label htmlFor={agreeFor} className="text-sm text-[#4F4F4F]">
        {children}
      </label>
    </div>
  );
};
export default Agree;
