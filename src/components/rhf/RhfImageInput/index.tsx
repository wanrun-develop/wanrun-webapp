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
    field: { ref, ...rest },
    formState: { errors },
  } = useController<T>({ name, control });

  return (
    <ImageInput
      inputRef={ref}
      {...rest}
      error={
        errors[name] &&
        `${(errors[name] as DeepMap<FieldValues, FieldError>).message}`
      }
    />
  );
};

export default RhfImageInput;
