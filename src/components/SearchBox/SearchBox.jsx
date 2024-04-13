import  { useState } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ onFilterChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    onFilterChange(value);
  };

  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.inputField}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
