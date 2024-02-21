import React, { useContext, useState } from "react";
import Image from "next/image";
import styles from "./searchInput.module.css";
import searchIcon from "../../../resources/search.png";
import { useAppDispatch } from "@/hooks";
import { setSearchText } from "@/redux/products/productsSlice";

const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch();

  const [inputText, setInputText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchText(inputText));
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
