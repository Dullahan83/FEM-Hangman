import { useNavigate } from "react-router-dom";
import Button from "../Components/Buttons/Button";
import Layout from "../Components/Layout";
import Menu from "../Components/Menu/Menu";
import Title from "../Components/Title";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout className="justify-center">
      <Menu className=" w-80 h-[481px] sm:w-[592px] sm:h-[500px] pb-[51px] justify-end">
        <Title
          Variant="Stacked"
          className="self-center absolute bottom-full translate-y-1/2 sm:translate-y-[43%] z-20"
        />
        <Button onClick={() => navigate("/categories")} Variant="Play" />
        <Button
          onClick={() => navigate("/rules")}
          Variant="Menu"
          className="bg-primary shadow-InOut mt-14 hover:bg-opacity-75"
        >
          how to play
        </Button>
      </Menu>
    </Layout>
  );
};

export default Home;
