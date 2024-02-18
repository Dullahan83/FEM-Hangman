import { useNavigate } from "react-router-dom";
import Button from "../Components/Buttons/Button";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout";
import Rule from "../Components/Rule";
import Back from "../Components/SVGIcons/Back";
import Title from "../Components/Title";
import { rules } from "../Utils/function";
const Rules = () => {
  const navigate = useNavigate();
  return (
    <Layout className="px-6 py-8 pb-15 sm:py-61 sm:pl-10 sm:pr-12 lg:px-28 lg:py-20 justify-between before:content-[''] before:absolute before:left-0 before:top-0 before:w-screen before:h-screen before:bg-gradient-to-b before:from-[#190439bf] before:via-[#151278bf] before:via-70% before:to-[#2b1677bf]  before:-z-10 ">
      <Header Variant="Regular" className="justify-end sm:justify-center">
        <Button
          onClick={() => navigate(-1)}
          Variant="Utils"
          className="absolute left-0"
        >
          <Back />
        </Button>
        <Title Variant="Regular" dataText="How to Play" className="">
          How to Play
        </Title>
      </Header>
      <section className="flex flex-col lg:flex-row gap-4 sm:gap-8">
        {rules.map((rule, index) => {
          return <Rule key={index} data={rule}></Rule>;
        })}
      </section>
    </Layout>
  );
};

export default Rules;
