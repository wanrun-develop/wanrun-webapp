import Select, { SelectProps } from '@/components/common/Select';
import { ChangeEvent } from 'react';
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
    field: { ref, onChange, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // キャスト型の特定用
    const firstValue = options[0].value;
    if (typeof firstValue == 'number') {
      onChange(Number(value));
    } else {
      onChange(value);
    }
  };

  return (
    <Select
      inputRef={ref}
      onChange={handleChange}
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
