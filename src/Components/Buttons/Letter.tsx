import { ComponentPropsWithoutRef, ReactNode } from "react";

type LetterProps = {
  Variant: "Keyboard" | "Letter" | "Empty" | "Blank";
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Letter = ({ Variant, children, ...props }: LetterProps) => {
  switch (Variant) {
    case "Keyboard":
      return (
        <button
          {...props}
          className="py-[10px] px-[10.8px] w-[28.89px] sm:py-[13px] sm:w-16 text-[24px] lg:w-[109px] tracking-tighter leading-150 sm:leading-120 sm:text-Heading-M bg-white rounded-lg  sm:rounded-[24px] disabled:opacity-25 hover:bg-primary hover:text-white active:bg-primary disabled:hover:bg-white disabled:hover:opacity-25 disabled:hover:text-secondary active:text-white"
        >
          {children}
        </button>
      );
    case "Letter":
      return (
        <p
          className={`${props.className} w-10 h-15 sm:w-22 sm:h-28 lg:w-28 lg:h-32 bg-primary sm:rounded-[32px] lg:rounded-40 flex items-center justify-center rounded-xl text-[40px] leading-120 sm:text-[64px] uppercase lg:text-Heading-L text-white shadow-InOut`}
        >
          {children}
        </p>
      );
    case "Empty":
      return (
        <p className="w-10 h-15 sm:w-22 sm:h-28 lg:w-28 lg:h-32 bg-primray flex items-center justify-center rounded-xl sm:rounded-[32px] lg:rounded-40 shadow-InOut bg-primary opacity-25">
          {children}
        </p>
      );
    case "Blank":
      return <p className="w-10 h-15  lg:w-28 lg:h-32 ">{children}</p>;

    default:
      break;
  }
};

export default Letter;
