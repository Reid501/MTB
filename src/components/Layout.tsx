import { FC } from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <div className="w-4/5 ">{children}</div>
    </div>
  );
};

export default Layout;
