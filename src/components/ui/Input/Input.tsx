import React from 'react';

type InputProps = {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  name: React.InputHTMLAttributes<HTMLInputElement>['name'];
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
};

function Input({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  ...rest
}: InputProps) {
  return (
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export default Input;
