import React, { ChangeEventHandler, FocusEventHandler } from 'react';

export type TextFieldProps = {
  placeholder?: string;
  type?: string;
  error?: string;
};

type Props = TextFieldProps & {
  value: string;
  inputRef: React.Ref<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
};

const TextField = (props: Props) => {
  const {
    placeholder,
    type = 'text',
    error,
    inputRef,
    value,
    onChange,
    onBlur,
  } = props;

  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        ref={inputRef}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
