import React, { useState } from "react";
import styles from "./filterOrderBy.module.css";
import { useGlobalContext } from "@/contexts/globalContext";

interface SortOptions {
  [key: string]: string;
}

const sortOptions: SortOptions = {
  "Mais Relevantes": "relevance",
  "Menor preço": "price_asc",
  "Maior preço": "price_desc",
};

const FilterOrderBy: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Mais Relevantes");
  const { setSortBy } = useGlobalContext();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSortBy(sortOptions[option]);
  };

  return (
    <div className={styles.dropdown}>
      <p>Ordenar por </p>
      <button className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
        {selectedOption} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div
          className={`${styles["dropdown-menu"]} ${isOpen ? styles.open : ""}`}
        >
          {Object.keys(sortOptions).map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterOrderBy;
