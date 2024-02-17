import React, { useState } from "react";
import Image from "next/image";
import styles from "./searchInput.module.css";
import searchIcon from "../../../resources/search.png";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Pesquisando por:", searchTerm);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        value={searchTerm}
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
