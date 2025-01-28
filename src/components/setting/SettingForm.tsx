'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { DogOwnerFormType } from '@/types/DogOwner';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SettingForm = () => {
  const form = useForm<DogOwnerFormType>({
    mode: 'onChange',
  });

  const onSubmit = async (data: DogOwnerFormType) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>名前</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit">保存</Button>
        </form>
      </Form>
    </div>
  );
};

export default SettingForm;
