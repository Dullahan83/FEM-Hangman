import useModal from "../../Hooks/useModal";
import GameStatus from "./GameStatus";
import Pause from "./Pause";

const Modal = () => {
  const { Status } = useModal();
  const returnModal = () => {
    switch (Status) {
      case "Paused":
        return <Pause />;
      case "Win":
        return <GameStatus Status="Win" />;
      case "Lose":
        return <GameStatus Status="Lose" />;

      default:
        break;
    }
  };

  return (
    <dialog
      className="fixed top-0 left-0 hidden bg-gradient-to-b from-[#1a043a43] via-[#15127845] via-70% to-[#2b167736] bg-opacity-25 w-full h-full open:flex backdrop:bg-transparent items-center justify-center"
      id={"modal"}
    >
      {returnModal()}
    </dialog>
  );
};

export default Modal;
