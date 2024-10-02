import { useState } from "react";
import Agree from "./Agree";
import Button from "./Button";
import Input from "./Input";
import { twMerge } from "tailwind-merge";

export const Card = ({ theme }: { theme: Theme }) => {
  const { bgColor, checkedBgColor, borderColor, textColor, ...rest } = theme;
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authTypeChange = (e: any) => {
    setIsLogin(!isLogin);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className={`flex flex-col gap-[20px] w-[375px] h-fit border rounded-lg border-black px-[24px] py-[40px]`}
    >
      <div className="flex flex-col gap-[10px]">
        <h1 className={twMerge("text-2xl font-bold text-center", textColor)}>
          {isLogin ? "로그인" : "회원가입"}
        </h1>
      </div>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {!isLogin && (
            <Input
              type="text"
              placeholder="이름을 입력하세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></Input>
          )}
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            value={isLogin ? "로그인" : "회원가입"}
            className={twMerge("text-white", bgColor, borderColor)}
          ></Button>
          <Button
            type="button"
            value={isLogin ? "가입하기" : "로그인으로 이동"}
            className="bg-white text-gray-500"
            onClick={(e) => authTypeChange(e)}
          ></Button>
        </div>
        {isLogin ? (
          <div className="flex flex-row justify-evenly items-center text-xs text-gray-500">
            <span>아이디 찾기</span>
            <span>비밀번호 찾기</span>
          </div>
        ) : (
          <Agree
            className={twMerge(borderColor, checkedBgColor)}
            agreeFor={isLogin ? "login" : "signin"}
          >
            <p className="text-sm text-gray-500 ml-1 ">약관에 동의합니다</p>
          </Agree>
        )}
      </form>
    </div>
  );
};
export default Card;
