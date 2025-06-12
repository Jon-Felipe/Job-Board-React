import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

export type SearchProp = {
  name: string;
  value: string;
  placeholder: string;
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
        data-testid='search-input'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={styles.search}
      />
    </div>
  );
}

export default Search;
