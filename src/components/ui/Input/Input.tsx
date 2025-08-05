import React from 'react';
import { InputContainer } from './Input.styles';

export type InputProps = {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  name: React.InputHTMLAttributes<HTMLInputElement>['name'];
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  label?: string;
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
};

function Input({
  type = 'text',
  name,
  value,
  onChange,
  label,
  placeholder,
}: InputProps) {
  return (
    <InputContainer>
      {label && (
        <label htmlFor={name} className='label'>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className='input'
      />
    </InputContainer>
  );
}

export default Input;
