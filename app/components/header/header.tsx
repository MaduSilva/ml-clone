import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../../resources/logo_ml.png";
import SearchInput from "../searchInput/SearchInput";

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBox}>
        <Image className={styles.logo} src={logo} alt="logotipo" />
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
