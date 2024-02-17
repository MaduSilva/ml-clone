import React from "react";
import Header from "./header/header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header title={""} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
