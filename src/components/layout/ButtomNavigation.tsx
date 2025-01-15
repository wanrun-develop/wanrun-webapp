import { DogIcon, SearchIcon } from 'lucide-react';
import Link from 'next/link';

const BottomNavigation = () => {
  return (
    <div className="h-16 flex justify-center sm:hidden">
      <Link href="/dog" className="mx-2 w-20 flex items-center">
        <div className="m-auto flex items-center flex-col">
          <DogIcon className="w-6 h-6" />
          <p className="text-sm">愛犬</p>
        </div>
      </Link>
      <Link href="/dogrun" className="mx-2 w-20 flex items-center">
        <div className="m-auto flex items-center flex-col">
          <SearchIcon className="w-6 h-6" />
          <p className="text-sm">ドッグラン</p>
        </div>
      </Link>
    </div>
  );
};
export default BottomNavigation;
