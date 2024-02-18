import { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "HealthBar" | "Regular";

type HeaderProps = {
  Variant: Variant;
  children: ReactNode;
} & ComponentPropsWithoutRef<"header">;

const Header = ({ Variant, children, ...props }: HeaderProps) => {
  switch (Variant) {
    case "Regular":
      return (
        <header
          className={`${props.className} w-full flex items-center relative`}
        >
          {children}
        </header>
      );
    case "HealthBar":
      return (
        <header className="flex w-full items-center relative justify-between">
          {children}
        </header>
      );
    default:
      break;
  }
};

export default Header;
