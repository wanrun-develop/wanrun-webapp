import SettingForm from '@/components/setting/SettingForm';
import { Text } from '@/components/ui/text';

const SettingPage = () => {
  return (
    <div className="p-6 sm:w-96 sm:mx-auto">
      <Text size="xl" weight="semibold">
        <h2>設定</h2>
      </Text>

      <SettingForm />
    </div>
  );
};

export default SettingPage;
