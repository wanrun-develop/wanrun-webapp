import Select, { SelectProps } from '@/components/common/Select';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type Props<T extends FieldValues, U extends string | number> = SelectProps<U> &
  UseControllerProps<T>;

const RhfSelect = <T extends FieldValues, U extends string | number>(
  props: Props<T, U>,
) => {
  const { name, control, options } = props;
  const {
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <Select
      inputRef={ref}
      options={options}
      {...rest}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};

export default RhfSelect;
