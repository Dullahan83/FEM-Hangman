import Letter from "./Buttons/Letter";

type KeyboardProps = {
  handleClick: (val: string) => void;
  usedLetters: string[];
};

const Keyboard = ({ handleClick, usedLetters }: KeyboardProps) => {
  const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  return (
    <section className="w-full flex flex-wrap gap-y-6 gap-x-2 sm:gap-y-6 sm:gap-x-4 lg:gap-x-6 justify-center ">
      {letters.map((letter, index) => {
        return (
          <Letter
            onClick={() => handleClick(letter)}
            disabled={usedLetters.includes(letter)}
            key={index}
            Variant="Keyboard"
          >
            {letter}
          </Letter>
        );
      })}
    </section>
  );
};

export default Keyboard;
