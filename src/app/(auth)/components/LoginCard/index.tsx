'use client';

import Button from '@/components/common/Button';
import RhfTextField from '@/components/rhf/RhfTextField';
import { useForm } from 'react-hook-form';
import styles from './LoginCard.module.scss';

const defaultValues = {
  email: '',
  password: '',
};

const LoginCard = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.field}>
        <label>Email</label>
        <RhfTextField name="email" control={control} />
      </div>
      <div className={styles.field}>
        <label>Password</label>
        <RhfTextField name="password" control={control} />
      </div>
      <div>
        <Button label="Login" onClick={() => {}} />
      </div>
    </form>
  );
};

export default LoginCard;
