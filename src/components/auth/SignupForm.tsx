'use client';

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
import { Button } from '../ui/button';
import { SignupDogOwnerFormType } from '@/types/AuthDogOwnerSchema';
import { signupDogOwnerFormSchema } from '@/schemas/AuthDogOwnerSchema';
import { useSignup } from '@/hooks/auth/useSignup';

const defaultValues = {
  dogOwnerName: '',
  password: '',
};

type Props = {
  onSubmitComplete: () => void;
};

const SignupForm = (props: Props) => {
  const { onSubmitComplete } = props;

  const form = useForm<SignupDogOwnerFormType>({
    mode: 'onChange',
    defaultValues,
    resolver: zodResolver(signupDogOwnerFormSchema),
  });

  const { signup } = useSignup();

  const onSubmit = async (data: SignupDogOwnerFormType) => {
    try {
      await signup(data);
    } catch (e) {
      return;
    }
    onSubmitComplete();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dogOwnerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <Button type="submit">登録</Button>
      </form>
    </Form>
  );
};

export default SignupForm;
