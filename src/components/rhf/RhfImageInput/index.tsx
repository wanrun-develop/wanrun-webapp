import ImageInput, { ImageInputProps } from '@/components/common/ImageInput';
import {
  DeepMap,
  FieldError,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type Props<T extends FieldValues> = ImageInputProps & UseControllerProps<T>;

const RhfImageInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, control } = props;
  const {
    field: { ref, onChange, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  const handleChange = (inputFile: File | null) => {
    onChange(inputFile);
  };

  return (
    <ImageInput
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

export default RhfImageInput;
