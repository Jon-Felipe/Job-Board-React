import React from 'react';
import { FaSearch } from 'react-icons/fa';

// extras
import { FormContainer, InputContainer } from './Search.styles';

export type SearchProps = {
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
};

function Search({
  name,
  placeholder,
  value,
  onChange,
  label,
  required = false,
}: SearchProps) {
  return (
    <FormContainer>
      {label && <label className='label'>{label}</label>}
      <InputContainer>
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
      </InputContainer>
    </FormContainer>
  );
}

export default Search;
