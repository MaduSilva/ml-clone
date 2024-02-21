import React, { useState } from "react";
import styles from "./SortOrderBy.module.css";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch } from "@/hooks";
import { setSortBy } from "@/redux/filters/filtersSlice";
import expandIcon from '../../../resources/expand-more.svg'

interface SortOptions {
  [key: string]: string;
}

const sortOptions: SortOptions = {
  "Más relevantes": "relevance",
  "Menor precio": "price_asc",
  "Mayor precio": "price_desc",
};

const SortOrderBy: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Más relevantes");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    dispatch(setSortBy(sortOptions[option]));
  };

  return (
    <div className={styles.dropdown}>
      <p className={styles.orderByText}>Ordenar por </p>
      <Link
      href={"/"}
      className={`${styles["dropdown-toggle"]} ${isOpen ? styles["open"] : ""}`}
      onClick={toggleDropdown}
    >
      {selectedOption} <Image src={expandIcon} alt="Veja mais" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
    </Link>
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

export default SortOrderBy;
