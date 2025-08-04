import React from 'react';
import { FaSearch } from 'react-icons/fa';

// extras
import { FormContainer } from './Search.styles';

export type SearchProps = {
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
}: SearchProps) {
  return (
    <FormContainer>
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
      />
    </FormContainer>
  );
}

export default Search;
