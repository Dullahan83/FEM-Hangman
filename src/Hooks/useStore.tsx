import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { generateRandomNumber, getDatas } from "../Utils/function";
import { DataType, Hangword } from "../Utils/types";

type State = {
  data: DataType;
  currentCategory: string;
  currentWord: Hangword;
  health: number;
  usedLetters: string[];
};

type Actions = {
  changeCategory: (val: string) => void;
  changeWord: () => void;
  addLetter: (letter: string) => void;
  reduceHealth: () => void;
  resetHealth: () => void;
  resetCategory: () => void;
};
const initialData = {
  categories: {},
};
const useStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      data: initialData,
      currentCategory: "",
      currentWord: { name: "United kingdom", selected: false },
      health: 100,
      usedLetters: [],
      changeCategory: (val) =>
        set((state) => {
          state.currentCategory = val;
          const categoryLength = state.data?.categories[val]?.length;
          state.health = 100;
          state.usedLetters = [];
          const random = generateRandomNumber(categoryLength);
          if (state.data?.categories[val][random]?.selected === true) {
            state.changeCategory(val);
          }
          state.currentWord = state.data.categories[val][random];
        }),
      changeWord: () =>
        set((state) => {
          console.log("Hello There");

          const currentCategory = state.currentCategory;
          const indexWord = state.data.categories[currentCategory].findIndex(
            (word) => word.name === state.currentWord.name
          );
          console.log(indexWord);

          if (indexWord === -1) return;
          state.data.categories[currentCategory][indexWord].selected = true;
          const categoryLength = state.data.categories[currentCategory].length;

          const random = generateRandomNumber(categoryLength);
          if (
            state.data?.categories[currentCategory][random]?.selected ===
              true ||
            indexWord === random ||
            state.data?.categories[currentCategory][random]?.name ===
              state.currentWord.name
          ) {
            state.changeWord();
          }
          state.currentWord = state.data.categories[currentCategory][random];
          state.health = 100;
          state.usedLetters = [];
        }),
      addLetter: (letter) =>
        set((state) => {
          state.usedLetters.push(letter);
        }),
      reduceHealth: () =>
        set((state) => {
          state.health -= 100 / 8;
        }),
      resetHealth: () =>
        set((state) => {
          state.health = 100;
        }),
      resetCategory: () =>
        set((state) => {
          state.data?.categories[state.currentCategory]?.forEach(
            (word) => (word.selected = false)
          );
        }),
    })),

    {
      name: "Hangman game state",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        data: state.data,
        currentCategory: state.currentCategory,
        currentWord: state.currentWord,
        health: state.health,
        usedLetters: state.usedLetters,
      }),
    }
  )
);

const initializeData = async () => {
  const storedData = useStore.getState();
  if (Object.keys(storedData.data.categories).length === 0) {
    const datas = (await getDatas()) as DataType;
    if (datas && datas.categories) {
      const firstCategoryKey = Object.keys(datas.categories)[0];
      const firstWord = datas.categories[firstCategoryKey]?.[0]; // Assuming there is at least one word
      if (firstWord) {
        useStore.setState({
          data: datas,
          currentCategory: firstCategoryKey,
          currentWord: firstWord,
        });
      }
    }
  }
};

initializeData();
export default useStore;
