import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      className={styles.search}
      type="text"
      id="search"
      placeholder="Search"
      defaultValue={searchTerm}
      onChange={handleChange}
    />
  );
}
