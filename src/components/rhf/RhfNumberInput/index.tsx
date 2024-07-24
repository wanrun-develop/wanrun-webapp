import NumberInput, { NumberInputProps } from '@components/common/NumberInput';
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
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <NumberInput
      inputRef={ref}
      {...rest}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};

export default RhfNumberInput;
