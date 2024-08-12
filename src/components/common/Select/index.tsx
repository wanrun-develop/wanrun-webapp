import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { number } from 'zod';

export type SelectProps<T> = {
  error?: string;
  options: { value: T; label: string }[];
};

type Props<T> = SelectProps<T> & {
  value: T;
  inputRef: React.Ref<HTMLSelectElement>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const Select = <T extends string | number>(props: Props<T>) => {
  const { value, options, error, inputRef, onChange } = props;

  const handle = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event);
    onChange(event);
  };

  return (
    <div>
      <select onChange={handle} ref={inputRef}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Select;
