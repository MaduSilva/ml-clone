import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./searchInput.module.css";
import searchIcon from "../../../resources/search.png";
import GlobalContext from "@/contexts/globalContext";

const SearchInput: React.FC = () => {
  const { setSearchText } = useContext(GlobalContext);
  const [inputText, setInputText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchText(inputText);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={inputText}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        <Image
          src={searchIcon}
          alt="Ícone de Pesquisa"
          className={styles.searchIcon}
        />{" "}
      </button>
    </form>
  );
};

export default SearchInput;
