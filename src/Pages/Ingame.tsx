import { useParams } from "react-router-dom";
import Button from "../Components/Buttons/Button";
import GuessContainer from "../Components/GuessContainer";
import Header from "../Components/Header/Header";
import HealthBar from "../Components/Header/HealthBar";
import Keyboard from "../Components/Keyboard";
import Layout from "../Components/Layout";
import Menu from "../Components/SVGIcons/Menu";
import useGame from "../Hooks/useGame";
import useModal from "../Hooks/useModal";
import useStore from "../Hooks/useStore";

const Ingame = () => {
  const { currentCategory, changeCategory } = useStore();
  const { isLetterInWord, usedLetters } = useGame();
  const { openModal } = useModal();
  const { category } = useParams();

  if (!currentCategory && category) changeCategory(category);

  const handleClick = () => {
    openModal("Paused");
  };

  return (
    <Layout className="px-6 py-8 pb-40 sm:py-61 sm:px-8 lg:px-28 lg:py-20  justify-between before:content-[''] before:absolute before:left-0 before:top-0 before:w-screen before:h-screen before:bg-gradient-to-b before:from-[#190439bf] before:via-[#151278bf] before:via-70% before:to-[#2b1677bf]  before:-z-10">
      <Header Variant="HealthBar">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-[57px]">
          <Button onClick={handleClick} Variant="Utils" className="relative">
            <Menu />
          </Button>
          <h1 className="text-[40px] sm:text-Heading-M lg:text-Heading-L text-white leading-120">
            {currentCategory}
          </h1>
        </div>
        <HealthBar />
      </Header>

      <GuessContainer />
      <Keyboard handleClick={isLetterInWord} usedLetters={usedLetters} />
    </Layout>
  );
};

export default Ingame;
