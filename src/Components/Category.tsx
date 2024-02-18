import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../Hooks/useStore";
const Category = ({
  slug,
  children,
}: {
  slug: string;
  children: ReactNode;
}) => {
  const { changeCategory, data } = useStore();
  const navigate = useNavigate();
  if (!slug || !children) return;
  const handleClick = () => {
    changeCategory(slug);
    navigate(`/InGame/${slug}`);
  };

  return (
    <button
      disabled={data.categories[slug].every((word) => word.selected === true)}
      onClick={handleClick}
      className="w-full sm:flex-[1_0_47%] xl:flex-[1_0_30%] relative py-6 sm:py-15.5 lg:py-16.5 text-[24px] sm:text-Heading-M leading-120 uppercase flex justify-center tracking-widest bg-primary text-white rounded-20 sm:rounded-40 shadow-InOut before:w-full before:h-full before:rounded-inherit before:absolute before:content-[''] before:bg-white before:left-0 before:top-0 before:-z-10 hover:bg-opacity-75 disabled:hover:bg-primary disabled:opacity-55 disabled:before:bg-black/40"
    >
      {children}
    </button>
  );
};

export default Category;
