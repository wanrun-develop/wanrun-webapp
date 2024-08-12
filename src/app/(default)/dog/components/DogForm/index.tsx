import { useForm } from 'react-hook-form';
import Button from '@components/common/Button';
import RhfTextField from '@components/rhf/RhfTextField';
import RhfImageInput from '@/components/rhf/RhfImageInput';
import RhfNumberInput from '@/components/rhf/RhfNumberInput';
import styles from './DogForm.module.scss';
import { Dog } from '@/types/Dog';
import { DogSchema } from '@/schemas/DogSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type Props = {
  moveToDetail: () => void;
};

const defaultValues = {
  id: 0,
  dogOwnerId: 0,
  dogTypeId: 0,
  name: '',
  weight: 500,
  image: '',
  sex: 0,
};

const DogForm = (props: Props) => {
  const { moveToDetail } = props;
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(DogSchema),
  });

  const onSubmit = (data: Dog) => {
    console.log(data);
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
            <RhfNumberInput name="dogTypeId" control={control} />
          </div>
          <div>
            <label className={styles.label}>Weight</label>
            <RhfNumberInput name="weight" control={control} />
          </div>
          <div>
            <label className={styles.label}>Sex</label>
            <RhfTextField name="sex" control={control} />
          </div>
          <div>
            <Button label="Submit" onClick={() => {}} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DogForm;
