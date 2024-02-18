import React, { useState } from "react";
import styles from "./FilterPrice.module.css";
import Image from "next/image";
import arrowIcon from "./arrow-right.svg";
import Filter from "@/interfaces/filterInterface";
import { useGlobalContext } from "@/contexts/globalContext";
import Link from "next/link";

interface FilterPriceProps {
  filters: Filter[];
  filterId: string;
}

const FilterPrice: React.FC<FilterPriceProps> = ({ filters, filterId }) => {
  const findFilter = filters.find((filter) => filter.id === filterId);
  const { setfilterMaxPrice, setFilterMinPrice, setFilterSelected } =
    useGlobalContext();
  const [inputMax, setInputMax] = useState("");
  const [inputMin, setInputMin] = useState("");

  if (!findFilter) {
    return null;
  }

  const handleChangeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMin(event.target.value);
  };

  const handleChangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMax(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setfilterMaxPrice(inputMax);
    setFilterMinPrice(inputMin);
    const range = `${inputMax}-${inputMin}`;
    handleOptions(range);
  };

  const handleOptions = (valuesId: string) => {
    setFilterSelected(valuesId);
  };

  return (
    <div className={styles.priceFilter}>
      <div key={findFilter.id} className={styles.filter}>
        <h6>{findFilter.name}</h6>
        <ul className={styles.rangeList}>
          {findFilter.values.map((range) => (
            <Link
              href={""}
              onClick={() => handleOptions(range.id)}
              key={range.id}
            >
              <p>
                {" "}
                {range.name}({range.results})
              </p>
            </Link>
          ))}
        </ul>
      </div>
      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Mínimo"
          onChange={handleChangeMin}
        />
        <span className={styles.separator}>-</span>
        <input
          className={styles.input}
          placeholder="Máximo"
          onChange={handleChangeMax}
        />
        <button
          className={styles.button}
          onClick={() => console.log("clicked")}
          type="submit"
        >
          <Image height={50} width={50} src={arrowIcon} alt="Arrow right" />
        </button>
      </form>
    </div>
  );
};

export default FilterPrice;
