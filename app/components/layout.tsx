import React from "react";
import Header from "./header/header";

interface MeuComponenteProps {
  children?: React.ReactNode;
}

const Layout: React.FC<MeuComponenteProps> = ({ children }) => {
  return (
    <div>
      <Header title={""} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
