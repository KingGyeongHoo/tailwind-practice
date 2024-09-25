import Login from "./components/Login";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <div className="flex flex-row justify-around w-[50%]">
      <input></input>
      <Login />
      <SignIn />
    </div>
  );
}
