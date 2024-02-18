import useStore from "../Hooks/useStore";

const EmptyMessage = () => {
  const { currentCategory } = useStore();
  return (
    <h2 className=" text-Heading-M text-white h-full w-full flex items-center justify-center text-center whitespace-pre-wrap ">
      {"The current category:    " + currentCategory}
      <br />
      {
        " has no unused word left, please choose a new category or quit the game to do a hard reset"
      }
    </h2>
  );
};

export default EmptyMessage;
