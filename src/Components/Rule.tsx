import { RuleType } from "../Utils/types";

const Rule = ({ data }: { data: RuleType }) => {
  return (
    <article className="flex flex-wrap gap-2 sm:block  items-center  lg:flex lg:flex-col w-full  bg-white p-8 sm:px-10 lg:p-12 lg:py-15 rounded-20 sm:rounded-40 lg:gap-y-10 lg:w-1/3">
      <h2 className="text-primary text-[24px] sm:text-Heading-L h-fit sm:h-full lg:h-fit leading-120 sm:float-left lg:float-none sm:flex sm:items-center sm:mr-10 lg:mr-0">
        {data.id}
      </h2>
      <h3 className=" text-2xl sm:text-[40px] uppercase lg:text-Heading-M text-secondary sm:leading-120">
        {data.title}
      </h3>
      <p className="text-[16px] sm:text-[20px] lg:text-Body text-paragraph sm:mt-4 lg:mt-0 tracking-wider leading-120  lg:text-center">
        {data.content}
      </p>
    </article>
  );
};

export default Rule;
