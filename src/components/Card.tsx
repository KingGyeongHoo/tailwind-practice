import Agree from "./Agree";
import Button from "./Button";
import Input from "./Input";

export const Card = ({ content }: any) => {
  const { mainText, inputInfo, buttonInfo } = content;
  console.log(inputInfo);
  return (
    <div
      className={`flex flex-col gap-[20px] w-[375px] h-fit border rounded-lg border-black px-[24px] py-[40px]`}
    >
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-xl font-bold text-[#4F4F4F]">
          {mainText} Into App
        </h1>
        <p className="text-sm">please enter your details to continue</p>
      </div>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {inputInfo.map((el: IInput) => {
            return <Input type={el.type} placeholder={el.placeholder}></Input>;
          })}
          <Agree agreeFor={mainText}>
            I agree with <b>terms</b> and <b>policies</b>.
          </Agree>
        </div>
        <div className="flex flex-col gap-4">
          {buttonInfo.map((el: IButton) => {
            return (
              <Button
                type="button"
                value={el.value}
                className={el.className}
              ></Button>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default Card;
