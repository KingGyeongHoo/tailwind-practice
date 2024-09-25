import Agree from "./Agree";
import Button from "./Button";
import Contents from "./Contents";
import Input from "./Input";

export const SignIn = () => {
  return (
    <div
      className={`flex flex-col justify-between w-[375px] h-[495px] border rounded-lg border-black px-[24px] py-[40px]`}
    >
      <Contents height="h-[58px]">
        <h1 className="text-xl font-bold text-[#4F4F4F]">Sign Into App</h1>
        <p className="text-sm">please enter your details to continue</p>
      </Contents>
      <Contents height="h-[337px]">
        <Contents height="h-[200px]">
          <Input type="text" placeholder="Enter Your Name"></Input>
          <Input type="email" placeholder="sample@email.com"></Input>
          <Input type="password" placeholder="Enter Password"></Input>
          <Agree agreeFor="signIn">
            I agree with <b>terms</b> and <b>policies</b>.
          </Agree>
        </Contents>
        <Contents height="h-[104px]">
          <Button
            type="button"
            value="Sign Up"
            className="bg-[#4F4F4F] text-white"
          ></Button>
          <Button
            type="button"
            value="Go To Log In"
            className="text-[#4F4F4F] bg-white"
          ></Button>
        </Contents>
      </Contents>
    </div>
  );
};
export default SignIn;
