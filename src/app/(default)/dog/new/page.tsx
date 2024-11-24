'use client';

import { DogFormType } from '@/types/Dog';
import DogForm from '../[dogId]/components/DogForm';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

const dogTemplate: DogFormType = {
  dogId: undefined,
  firstDogTypeId: 0,
  weight: 0,
  sex: 'M',
  name: '',
};

const CreateDogPage = () => {
  const router = useRouter();

  const afterSubmission = () => {
    router.push('/dog');
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>愛犬登録</h2>
      </div>
      <div>
        <DogForm
          dog={dogTemplate}
          afterSubmission={afterSubmission}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
};

export default CreateDogPage;
