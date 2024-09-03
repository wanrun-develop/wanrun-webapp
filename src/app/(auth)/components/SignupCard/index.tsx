'use client';

import Button from '@/components/common/Button';
import RhfTextField from '@/components/rhf/RhfTextField';
import { useForm } from 'react-hook-form';
import styles from './SignupCard.module.scss';
import { AuthDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { authDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { useSignup } from '../../signup/hooks/useSignup';
import { useRouter } from 'next/navigation';

const defaultValues = {
  password: '',
  grantType: 'password',
  dogOwner: {
    email: '',
    name: '',
  },
};

const SignupCard = () => {
  const { control, handleSubmit } = useForm<AuthDogOwnerFormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(authDogOwnerFormSchema),
  });
  const { signup } = useSignup();
  const router = useRouter();

  const onSubmit = async (data: AuthDogOwnerFormType) => {
    try {
      signup(data);
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
        <RhfTextField name="dogOwner.email" control={control} />
      </div>
      <div className={styles.field}>
        <label>Password</label>
        <RhfTextField name="password" control={control} />
      </div>
      <div className={styles.field}>
        <label>Name</label>
        <RhfTextField name="dogOwner.name" control={control} />
      </div>
      <div>
        <Button label="Signup" type="submit" onClick={() => {}} />
      </div>
    </form>
  );
};

export default SignupCard;
