import { useNavigate } from "react-router-dom";
import Button from "../Components/Buttons/Button";
import Category from "../Components/Category";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout";
import Back from "../Components/SVGIcons/Back";
import Title from "../Components/Title";
import useStore from "../Hooks/useStore";

const Categories = () => {
  const { resetCategory } = useStore();
  const { categories } = useStore((state) => state.data);
  // const cat = [
  //   "Movies",
  //   "TV Shows",
  //   "Countries",
  //   "Capital Cities",
  //   "Animals",
  //   "Sports",
  // ];
  const cat = Object.keys(categories);
  const handleBack = () => {
    navigate("/");
    resetCategory();
  };

  const navigate = useNavigate();
  return (
    <Layout className="px-6 py-8 sm:py-61 sm:pl-10 sm:pr-12 sm:pb-28 lg:px-28 lg:py-20 xl:pb-49 justify-between before:content-[''] before:absolute before:left-0 before:top-0 before:w-screen before:h-screen before:bg-gradient-to-b before:from-[#190439bf] before:via-[#151278bf] before:via-70% before:to-[#2b1677bf]  before:-z-10">
      <Header Variant="Regular" className="justify-end sm:justify-center">
        <Button
          onClick={handleBack}
          Variant="Utils"
          className="absolute left-0"
        >
          <Back />
        </Button>
        <Title Variant="Regular" dataText="Pick a Category">
          Pick a Category
        </Title>
      </Header>
      <section className="w-full flex flex-col sm:flex-row sm:flex-wrap gap-y-4 sm:gap-8">
        {cat.map((category, index) => {
          return (
            <Category slug={category} key={index}>
              {category}
            </Category>
          );
        })}
      </section>
    </Layout>
  );
};

export default Categories;
