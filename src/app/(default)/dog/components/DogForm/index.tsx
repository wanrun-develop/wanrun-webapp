import { useForm } from 'react-hook-form';
import Button from '@components/common/Button';
import RhfTextField from '@components/rhf/RhfTextField';
import RhfImageInput from '@/components/rhf/RhfImageInput';
import RhfNumberInput from '@/components/rhf/RhfNumberInput';
import styles from './DogForm.module.scss';
import { DogFormType } from '@/types/Dog';
import { dogFormSchema } from '@/schemas/DogSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import RhfSelect from '@/components/rhf/RhfSelect';
import { useCreateDog } from '../../hooks/useCreateDog';

type Props = {
  moveToDetail: () => void;
};

const defaultValues = {
  dogId: undefined,
  dogTypeId: 0,
  name: '',
  weight: 500,
  image: undefined,
  sex: 'M',
};

const dogTypes = [
  { label: 'dog1', value: 0 },
  { label: 'dog2', value: 1 },
  { label: 'dog3', value: 2 },
];

const sex = [
  { label: 'male', value: 'M' },
  { label: 'female', value: 'F' },
];

const DogForm = (props: Props) => {
  const { moveToDetail } = props;
  const { control, handleSubmit } = useForm<DogFormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(dogFormSchema),
  });
  const { createDog, isLoading, error } = useCreateDog();

  const onSubmit = (data: DogFormType) => {
    console.log(data);
    try {
      createDog(data);
    } catch (e) {
      console.log(e);
      return;
    }
    moveToDetail();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.grid}>
          <div className={styles.imageForm}>
            <label className={styles.label}>Image</label>
            <RhfImageInput name="image" control={control} />
          </div>
          <div>
            <label className={styles.label}>Name</label>
            <RhfTextField name="name" control={control} />
          </div>
          <div>
            <label className={styles.label}>Dog Type</label>
            <RhfSelect name="dogTypeId" control={control} options={dogTypes} />
          </div>
          <div>
            <label className={styles.label}>Weight</label>
            <RhfNumberInput name="weight" control={control} />
          </div>
          <div>
            <label className={styles.label}>Sex</label>
            <RhfSelect name="sex" control={control} options={sex} />
          </div>
          <div>
            <Button label="Submit" type="submit" onClick={() => {}} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DogForm;
