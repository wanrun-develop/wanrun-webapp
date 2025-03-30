'use client';

import SettingForm from '@/components/setting/SettingForm';
import { Text } from '@/components/ui/text';
import GetSessionButton from './GetSessionButton';

const SettingPage = async () => {
  return (
    <div className="p-6 sm:w-96 sm:mx-auto">
      <Text size="xl" weight="semibold">
        <h2>設定</h2>
      </Text>

      <SettingForm />

      <GetSessionButton />
    </div>
  );
};

export default SettingPage;
