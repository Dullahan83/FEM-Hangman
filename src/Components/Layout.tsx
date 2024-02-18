import { ComponentPropsWithoutRef } from "react";

const Layout = ({
  children,
  ...props
}: { children: React.ReactNode } & ComponentPropsWithoutRef<"main">) => {
  return (
    <main
      // className={`${props.className} relative z-0 bg-[url('/assets/images/background-mobile.svg')] bg-right bg-no-repeat bg-cover sm:bg-top sm:bg-[url('/assets/images/background-tablet.svg')] lg:bg-[url('/assets/images/background-desktop.svg')] w-full h-full flex flex-col `}
      className={`${props.className}  z-0  w-full h-full flex flex-col `}
    >
      {children}
      {/* <Modal /> */}
    </main>
  );
};

export default Layout;
