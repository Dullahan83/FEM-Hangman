import { useNavigate } from "react-router-dom";
import useModal from "../../Hooks/useModal";
import useStore from "../../Hooks/useStore";
import Button from "../Buttons/Button";
import Menu from "../Menu/Menu";
import Title from "../Title";

const GameStatus = ({ Status }: { Status: "Win" | "Lose" }) => {
  const { changeWord, resetCategory } = useStore();
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const handleNewRound = () => {
    changeWord();
    closeModal();
  };
  const handleCategoryChange = () => {
    closeModal();
    navigate("/categories");
  };
  const handleQuit = () => {
    closeModal();
    navigate("/");
    resetCategory();
  };

  return (
    <Menu className=" w-[324px] h-[445px] sm:w-[592px]  pb-[87px] sm:pb-[71px] relative justify-end">
      <div className="self-center absolute bottom-full translate-y-1/2 sm:translate-y-[43%] z-40">
        <Title
          Variant="Regular"
          dataText={Status === "Win" ? "You Win" : "You Lose"}
        >
          {Status === "Win" ? "You Win" : "You Lose"}
        </Title>
      </div>
      <Button
        onClick={handleNewRound}
        Variant="Menu"
        className="bg-primary shadow-InOut  hover:bg-opacity-75 active:bg-opacity-75"
      >
        Play Again!
      </Button>
      <Button
        Variant="Menu"
        className="bg-primary shadow-InOut mt-8  hover:bg-opacity-75 active:bg-opacity-75"
        onClick={handleCategoryChange}
      >
        New Category
      </Button>
      <Button
        Variant="Menu"
        onClick={handleQuit}
        className="bg-gradient-to-b from-gradientTop to-gradientBot shadow-InOutPink mt-8   hover:from-gradientTop/75 hover:to-gradientBot/75 active:from-gradientTop/75 active:to-gradientBot/75  "
      >
        Quit Game
      </Button>
    </Menu>
  );
};

export default GameStatus;
