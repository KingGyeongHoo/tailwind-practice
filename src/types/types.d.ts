interface IInput {
  type: string;
  placeholder: string;
}

interface IButton {
  value: string;
  className: string;
}

type InputProps = React.ComponentPropsWithoutRef<"input">;
type ButtonProps = React.ComponentPropsWithoutRef<"input">;
type ContentProps = React.ComponentPropsWithoutRef<"div">;

interface Content {
  children: React.ReactNode;
}

interface Agree {
  className: string;
  agreeFor: string;
  children: React.ReactNode;
}

interface Info {
  mainText: string;
  inputInfo: Input[];
  buttonInfo: Button[];
}

interface Theme {
  name: string;
  bgColor: string;
  checkedBgColor: string;
  borderColor: string;
  textColor: string;
}
