import useStore from "../../Hooks/useStore";
import Heart from "../SVGIcons/Heart";

const HealthBar = () => {
  const { health } = useStore();
  return (
    <div className="flex items-center gap-4 sm:gap-10">
      <div className="w-14 sm:w-40 lg:w-60 h-4 sm:h-8 rounded-full bg-white p-1 sm:py-[9px] sm:px-[11px]">
        <span
          style={{ width: health + "%" }}
          className="h-full rounded-inherit bg-secondary block transition-all duration-300"
        ></span>
      </div>
      <Heart />
    </div>
  );
};

export default HealthBar;
