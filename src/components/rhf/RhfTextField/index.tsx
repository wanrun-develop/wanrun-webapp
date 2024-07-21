import TextField, { TextFieldProps } from '@components/common/TextField';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type Props<T extends FieldValues> = TextFieldProps & UseControllerProps<T>;

const RhfTextField = <T extends FieldValues>(props: Props<T>) => {
  const { name, control, placeholder } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <TextField
      inputRef={ref}
      placeholder={placeholder}
      {...rest}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};

export default RhfTextField;
