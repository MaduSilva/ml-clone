import React, { useState } from "react";
import styles from "./PriceFilterItem.module.css";
import Image from "next/image";
import arrowIcon from "../../../resources/expand-right-circle.svg";
import Filter from "@/interfaces/Filter";
import Link from "next/link";
import { useAppDispatch } from "@/hooks";
import {
  setFilterMaxPrice,
  setFilterMinPrice,
  setFilterSelected,
} from "@/redux/filters/filtersSlice";
import { formatValue } from "../../utils/formatValue";

interface FilterPriceProps {
  filters: Filter[];
  filterId: string;
}

const PriceFilterItem: React.FC<FilterPriceProps> = ({ filters, filterId }) => {
  const findFilter = filters.find((filter) => filter.id === filterId);
  const dispatch = useAppDispatch();
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
    dispatch(setFilterMaxPrice(inputMax));
    dispatch(setFilterMinPrice(inputMin));
    const range =
      inputMax && inputMin
        ? `${inputMin}-${inputMax}`
        : inputMax
        ? `*-{$inputMax}`
        : inputMin
        ? `${inputMin}-*`
        : "";

    handleOptions(range);
  };

  const handleOptions = (range: string) => {
    dispatch(setFilterSelected(range));
  };

  return (
    <div className={styles.priceFilterContainer}>
      <div key={findFilter.id}>
        <p className={styles.filterTitle}>{findFilter.name}</p>
        <ul className={styles.rangeList}>
          {findFilter.values.map((range) => (
            <Link
              href={""}
              onClick={() => handleOptions(range.id)}
              key={range.id}
            >
              <p>
                {range.name} 
                <span className={styles.rangeQuantity}>
                ({formatValue(range.results)})
                </span>
                
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
        <span className={styles.separator}>—</span>
        <input
          className={styles.input}
          placeholder="Máximo"
          onChange={handleChangeMax}
        />
        <button className={styles.button} type="submit">
          <Image height={30} width={30} src={arrowIcon} alt="Arrow right" />
        </button>
      </form>
    </div>
  );
};

export default PriceFilterItem;
