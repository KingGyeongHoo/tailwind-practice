import Agree from "./Agree";
import Button from "./Button";
import Contents from "./Contents";
import Input from "./Input";

export const Login = () => {
  return (
    <div
      className={`flex flex-col justify-between w-[375px] h-[434px] border rounded-lg border-black px-[24px] py-[40px]`}
    >
      <Contents height="h-[58px]">
        <h1 className="text-xl font-bold text-[#4F4F4F]">Login Into App</h1>
        <p className="text-sm">please enter your details to continue</p>
      </Contents>
      <Contents height="h-[276px]">
        <Contents height="h-[140px]">
          <Input type="email" placeholder="sample@email.com"></Input>
          <Input type="password" placeholder="Enter Password"></Input>
          <Agree>
            I agree with <b>terms</b> and <b>policies</b>.
          </Agree>
        </Contents>
        <Contents height="h-[104px]">
          <Button
            mainText="Log In"
            bgColor="bg-[#4F4F4F]"
            textColor="text-white"
          ></Button>
          <Button
            mainText="Go To Sign Up"
            bgColor="bg-white"
            textColor="text-[#4F4F4F]"
          ></Button>
        </Contents>
      </Contents>
    </div>
  );
};
export default Login;
