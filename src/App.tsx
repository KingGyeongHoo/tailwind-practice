import Card from "./components/Card";

export default function App() {
  const login = {
    mainText: "Login",
    inputInfo: [
      {
        type: "email",
        placeholder: "someone@example.com",
      },
      {
        type: "password",
        placeholder: "Enter Password",
      },
    ],
    buttonInfo: [
      { value: "Log In", className: "bg-[#4F4F4F] text-white" },
      {
        value: "Go To Sign In",
        className: "bg-white text-[#4F4F4F]",
      },
    ],
  };
  const signin = {
    mainText: "Sign",
    inputInfo: [
      {
        type: "text",
        placeholder: "Enter Your Name",
      },
      {
        type: "email",
        placeholder: "someone@example.com",
      },
      {
        type: "password",
        placeholder: "Enter Password",
      },
    ],
    buttonInfo: [
      { value: "Sign In", className: "bg-[#4F4F4F] text-white" },
      {
        value: "Go To Log In",
        className: "bg-white text-[#4F4F4F]",
      },
    ],
  };
  return (
    <div className="flex flex-row justify-around w-[50%]">
      <Card content={login} />
      <Card content={signin} />
    </div>
  );
}
