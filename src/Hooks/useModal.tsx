import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Status = "Paused" | "Win" | "Lose";

type State = {
  Status: Status;
};
type Actions = {
  openModal: (val: Status) => void;
  closeModal: () => void;
};
const useModal = create<State & Actions>()(
  immer((set) => ({
    Status: "Paused",
    openModal: (Status) =>
      set((state) => {
        state.Status = Status;
        setTimeout(() => {
          const modal = document.getElementById("modal") as HTMLDialogElement;
          if (modal instanceof HTMLDialogElement) {
            modal.show();
          }
        }, 100);
      }),
    closeModal: () =>
      set(() => {
        const modal = document.getElementById("modal") as HTMLDialogElement;
        if (modal instanceof HTMLDialogElement) {
          modal.close();
        }
      }),
  }))
);

export default useModal;
