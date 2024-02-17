import React, { useState } from "react";
import styles from "./filterOrderBy.module.css";

const FilterOrderBy: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Mais Relevantes");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <p>Ordernar por </p>
      <button className={styles["dropdown-toggle"]} onClick={toggleDropdown}>
        {selectedOption} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div
          className={`${styles["dropdown-menu"]} ${isOpen ? styles.open : ""}`}
        >
          <div
            className={styles.option}
            onClick={() => handleOptionClick("Mais Relevantes")}
          >
            Mais Relevantes
          </div>
          <div
            className={styles.option}
            onClick={() => handleOptionClick("Menor preço")}
          >
            Menor preço
          </div>
          <div
            className={styles.option}
            onClick={() => handleOptionClick("Maior preço")}
          >
            Maior preço
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterOrderBy;
