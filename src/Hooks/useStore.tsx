import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { generateRandomNumber } from "../Utils/function";
import { DataType, Hangword } from "../Utils/types";

type State = {
  data: DataType;
  currentCategory: string;
  currentWord: Hangword;
  health: number;
  usedLetters: string[];
  isCategoryFinished: boolean;
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
      currentCategory: "Countries",
      currentWord: { name: "United kingdom", selected: false },
      health: 100,
      usedLetters: ["i", "n", "d", "o"],
      isCategoryFinished: false,
      changeCategory: (val) =>
        set((state) => {
          state.isCategoryFinished = state.data.categories[val].every(
            (word) => word.selected === true
          );
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
          const currentCategory = state.currentCategory;
          const indexWord = state.data.categories[currentCategory].findIndex(
            (word) => word.name === state.currentWord.name
          );

          if (indexWord === -1) return;
          state.data.categories[currentCategory][indexWord].selected = true;
          const pickingArray = state.data.categories[currentCategory].filter(
            (word) =>
              word.selected === false && word.name != state.currentWord.name
          );
          if (!pickingArray.length) {
            state.isCategoryFinished = true;
            return;
          }
          const random = generateRandomNumber(pickingArray.length);
          state.currentWord = pickingArray[random];
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
          const keys = Object.keys(state.data.categories);
          keys.forEach((key) =>
            state.data.categories[key].map(
              (_, i) => (state.data.categories[key][i].selected = false)
            )
          );
          state.isCategoryFinished = false;
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

// const initializeData = async () => {
//   const storedData = useStore.getState();
//   if (Object.keys(storedData.data.categories).length === 0) {
//     const datas = (await getDatas()) as DataType;
//     if (datas && datas.categories) {
//       const firstCategoryKey = Object.keys(datas.categories)[0];
//       const firstWord = datas.categories[firstCategoryKey]?.[0]; // Assuming there is at least one word
//       if (firstWord) {
//         useStore.setState({
//           data: datas,
//           currentCategory: firstCategoryKey,
//           currentWord: firstWord,
//         });
//       }
//     }
//   }
// };

// initializeData();
export default useStore;
