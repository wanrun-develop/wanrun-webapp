'use client';

import { useLogin } from '@/app/hooks/auth/useLogin';
import { loginDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { LoginDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const defaultValues = {
  email: '',
  password: '',
};

type Props = {
  onSubmitComplete: () => void;
};

const LoginForm = (props: Props) => {
  const { onSubmitComplete } = props;

  const form = useForm<LoginDogOwnerFormType>({
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
    onSubmitComplete();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>電話番号</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>パスワード</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ログイン</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
