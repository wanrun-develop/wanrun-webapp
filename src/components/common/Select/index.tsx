import React, { ChangeEventHandler } from 'react';

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
  const { options, error, inputRef, onChange } = props;

  return (
    <div>
      <select onChange={onChange} ref={inputRef}>
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
