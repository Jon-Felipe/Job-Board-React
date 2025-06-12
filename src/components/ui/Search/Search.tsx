import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

type SearchProp = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function Search({
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: SearchProp) {
  return (
    <div className={styles.searchContainer}>
      <FaSearch />
      <input
        type='search'
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={styles.search}
      />
    </div>
  );
}

export default Search;
