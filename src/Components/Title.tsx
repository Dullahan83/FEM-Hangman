import { ComponentPropsWithoutRef } from "react";

type TitleType = "Stacked" | "Regular";

type TitleVariant = {
  Variant: TitleType;
  children?: React.ReactNode;
  dataText?: string;
} & ComponentPropsWithoutRef<"div" | "h1">;

const Title = ({ Variant, children, dataText, ...props }: TitleVariant) => {
  switch (Variant) {
    case "Stacked":
      return (
        <div {...props}>
          <h1 className="flex flex-col text-Heading-S sm:text-Heading-M leading-normal w-fit">
            <span
              data-text="THE"
              className="shadow-title text-white translate-x-[17.3%] sm:translate-x-[17.7%] double-shadow translate-y-[113%] sm:translate-y-[110%] drop-shadow-[0_20px_5px_0_#000] -z-10 tracking-wider"
            >
              THE
            </span>
            <span
              data-text="Hangman"
              className="gradient-title text-Heading-L sm:text-Heading-XL shadow-title double-shadow"
            >
              Hangman
            </span>
            <span
              data-text="GAME"
              className="shadow-title text-white self-end -translate-x-[83%] sm:-translate-x-[87%] -translate-y-[85%] double-shadow sm:-translate-y-[86%] tracking-wider w-fit"
            >
              GAME
            </span>
          </h1>
        </div>
      );
    case "Regular":
      return (
        <h1
          data-text={dataText}
          className={`${props.className} shadow-title gradient-title text-Heading-M sm:text-[104px] leading-120 lg:text-Heading-XL w-fit`}
        >
          {children}
        </h1>
      );
    default:
      return null;
  }
};

export default Title;
