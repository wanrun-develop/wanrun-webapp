import { useForm } from 'react-hook-form';
import Button from '@components/common/Button';
import RhfTextField from '@components/rhf/RhfTextField';
import RhfImageInput from '@/components/rhf/RhfImageInput';
import RhfNumberInput from '@/components/rhf/RhfNumberInput';
import styles from './DogForm.module.scss';

type Props = {
  moveToDetail: () => void;
};

const defaultValues = {
  name: '',
  weight: 500,
  image: '',
  age: 1,
  size: '',
};

const DogForm = (props: Props) => {
  const { moveToDetail } = props;
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit = (data: any) => {
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
            <label className={styles.label}>Age</label>
            <RhfNumberInput name="age" control={control} />
          </div>
          <div>
            <label className={styles.label}>Weight</label>
            <RhfNumberInput name="weight" control={control} />
          </div>
          <div>
            <label className={styles.label}>Size</label>
            <RhfTextField name="size" control={control} />
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
