import NumberInput, { NumberInputProps } from '@components/common/NumberInput';
import { ChangeEvent } from 'react';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type Props<T extends FieldValues> = NumberInputProps & UseControllerProps<T>;

const RhfNumberInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, control } = props;
  const {
    field: { ref, onChange, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    onChange(value);
  };

  return (
    <NumberInput
      inputRef={ref}
      onChange={handleChange}
      {...rest}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};

export default RhfNumberInput;
