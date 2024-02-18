import React, { ComponentPropsWithoutRef } from "react";

const Menu = ({
  children,
  ...props
}: { children: React.ReactNode } & ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={`${props.className}  relative z-10 self-center bg-gradient-to-b from-[#344ABA] to-[#001479e7] rounded-[72px] flex flex-col items-center  shadow-top after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:shadow-bottom after:rounded-inherit after:-z-10`}
    >
      {children}
    </div>
  );
};

export default Menu;
