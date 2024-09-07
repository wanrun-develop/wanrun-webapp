import TextField, { TextFieldProps } from '@components/common/TextField';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import get from 'lodash/get';

type Props<T extends FieldValues> = TextFieldProps & UseControllerProps<T>;

const RhfTextField = <T extends FieldValues>(props: Props<T>) => {
  const { name, control, placeholder, type } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  const errorMessage = get(errors, name) as
    | DeepMap<FieldValues, FieldError>
    | undefined;

  return (
    <TextField
      inputRef={ref}
      placeholder={placeholder}
      type={type}
      {...rest}
      error={errorMessage && errorMessage.message}
    />
  );
};

export default RhfTextField;
