'use client';

import Button from '@/components/common/Button';
import RhfTextField from '@/components/rhf/RhfTextField';
import { useForm } from 'react-hook-form';
import styles from './SignupCard.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignup } from '../../signup/hooks/useSignup';
import { useRouter } from 'next/navigation';
import { SignupDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { signupDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';

const defaultValues = {
  password: '',
  grantType: 'password',
  dogOwner: {
    email: '',
    name: '',
  },
};

const SignupCard = () => {
  const { control, handleSubmit } = useForm<SignupDogOwnerFormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(signupDogOwnerFormSchema),
  });
  const { signup } = useSignup();
  const router = useRouter();

  const onSubmit = async (data: SignupDogOwnerFormType) => {
    try {
      await signup(data);
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
        <RhfTextField name="password" type="password" control={control} />
      </div>
      <div className={styles.field}>
        <label>Name</label>
        <RhfTextField name="dogOwnerName" control={control} />
      </div>
      <div>
        <Button label="Signup" type="submit" onClick={() => {}} />
      </div>
    </form>
  );
};

export default SignupCard;
