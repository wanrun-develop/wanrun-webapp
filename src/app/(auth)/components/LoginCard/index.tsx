'use client';

import Button from '@/components/common/Button';
import RhfTextField from '@/components/rhf/RhfTextField';
import { useForm } from 'react-hook-form';
import styles from './LoginCard.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogin } from '../../login/hooks/useLogin';
import { useRouter } from 'next/navigation';
import { LoginDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { loginDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';

const defaultValues = {
  email: '',
  password: '',
};

const LoginCard = () => {
  const { control, handleSubmit } = useForm<LoginDogOwnerFormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(loginDogOwnerFormSchema),
  });

  const { login } = useLogin();
  const router = useRouter();

  const onSubmit = async (data: LoginDogOwnerFormType) => {
    console.log(data);
    try {
      await login(data);
      router.push('/dog');
    } catch (e) {
      console.error(e);
      return;
    }
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
        <Button label="Login" type="submit" onClick={() => {}} />
      </div>
    </form>
  );
};

export default LoginCard;
