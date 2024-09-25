interface BgInfo {
  children: React.ReactNode;
  height: string;
  text: string;
}

type InputProps = React.ComponentPropsWithoutRef<"input">;
type ButtonProps = React.ComponentPropsWithoutRef<"input">;

interface Content {
  height: string;
  children: React.ReactNode;
}

interface Agree {
  agreeFor: string;
  children: React.ReactNode;
}
