import { useEffect, useState } from "react";
import useModal from "./useModal";
import useStore from "./useStore";

const useGame = () => {
  const { currentWord, health, reduceHealth, usedLetters, addLetter, data } =
    useStore();

  const [wordCheck, setWordCheck] = useState<string[]>();

  const { openModal } = useModal();
  const isLetterInWord = (letter: string) => {
    if (usedLetters?.includes(letter) || health <= 0 || !wordCheck?.length)
      return;
    else if (!currentWord.name.toUpperCase().includes(letter)) {
      reduceHealth();
      return;
    }
    addLetter(letter);
    setWordCheck((prev) => {
      return prev?.filter((char) => char.toUpperCase() !== letter);
    });
  };
  useEffect(() => {
    const temp = [...currentWord.name].filter((char) => char.match(/\w+/g));
    setWordCheck(temp);
    console.log(data);
  }, [currentWord.name]);
  useEffect(() => {
    health === 0 && openModal("Lose");
    !wordCheck?.length && usedLetters.length > 0 && openModal("Win");
  }, [health, usedLetters]);
  return { usedLetters, isLetterInWord };
};

export default useGame;
