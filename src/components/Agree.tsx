export const Agree = ({ children }: Agree) => {
  return (
    <div className="w-[240px] h-[20px] flex flex-row justify-between items-center">
      <input className="w-[20px] h-[20px]" type="checkbox" id="agree"></input>
      <label htmlFor="agree" className="text-sm text-[#4F4F4F]">
        {children}
      </label>
    </div>
  );
};
export default Agree;
