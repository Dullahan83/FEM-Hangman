import useGame from "../Hooks/useGame";
import useStore from "../Hooks/useStore";
import Letter from "./Buttons/Letter";

const GuessContainer = () => {
  const { currentWord } = useStore();
  const { usedLetters } = useGame();
  const wordLines = currentWord.name.split(" ");
  const returnComponent = (char: string, index: number, bool: boolean) => {
    if (
      (char.match(/\S/) && char.match(/\W/)) ||
      usedLetters.includes(char.toUpperCase())
    ) {
      return (
        <Letter
          className={bool ? "mx-0" : "mx-40"}
          key={index}
          Variant="Letter"
        >
          {char}
        </Letter>
      );
    } else if (char.match(/\s+/g)) {
      return null;
    } else
      return (
        <Letter key={index} Variant="Empty">
          {null}
        </Letter>
      );
  };

  return (
    <section className="flex flex-wrap gap-y-3 gap-x-[7px] items-center justify-center">
      {wordLines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex flex-wrap gap-x-[7px]  gap-y-3 items-center justify-center"
        >
          {line.split("").map((char, charIndex) => {
            return returnComponent(char, charIndex, line.length > 1);
          })}
        </div>
      ))}
    </section>
  );
};

export default GuessContainer;
