import React, { ChangeEventHandler, FocusEventHandler } from 'react';

export type NumberInputProps = {
  error?: string;
};

type Props = NumberInputProps & {
  value: number;
  inputRef: React.Ref<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

const NumberInput = (props: Props) => {
  const { error, inputRef, value, onChange, onBlur } = props;

  return (
    <div>
      <input
        type="number"
        ref={inputRef}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default NumberInput;
