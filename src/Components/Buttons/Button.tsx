import { ComponentPropsWithoutRef, ReactNode } from "react";
import Play from "../SVGIcons/Play";

type ButtonProps = {
  Variant: "Play" | "Utils" | "Menu";
  children?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ Variant, children, ...props }: ButtonProps) => {
  switch (Variant) {
    case "Play":
      return (
        <button
          {...props}
          className={` w-40 sm:w-50 aspect-square  relative rounded-full flex items-center justify-center bg-gradient-to-b from-gradientTop to-gradientBot shadow-play hover:from-gradientTop/75 hover:to-gradientBot/75  before:w-full before:h-full before:rounded-inherit before:absolute before:content-[''] before:bg-white before:left-0 before:top-0 before:-z-10 active:from-gradientTop/75 active:to-gradientBot/75`}
        >
          <Play />
        </button>
      );
    case "Menu":
      return (
        <button
          {...props}
          className={`${props.className} relative px-16 py-3 rounded-full uppercase text-white text-Heading-S before:w-full before:h-full before:rounded-inherit before:absolute before:content-[''] before:bg-white before:left-0 before:top-0 before:-z-10 tracking-wider`}
        >
          {children}
        </button>
      );
    case "Utils":
      return (
        <button
          {...props}
          className={`${props.className} aspect-square flex items-center justify-center rounded-full w-10 sm:w-16 lg:w-23 shadow-utilsMob sm:shadow-utils bg-gradient-to-b from-gradientTop to-gradientBot hover:from-gradientTop/75 hover:to-gradientBot/75  before:w-full before:h-full before:rounded-inherit before:absolute before:content-[''] before:bg-white before:left-0 before:top-0 before:-z-10`}
        >
          {children}
        </button>
      );
    default:
      return <button {...props}>{children}</button>;
  }
};

export default Button;
