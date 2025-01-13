import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import DogImage from '@public/dog.jpg';
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="px-10 py-3 bg-white border-b border-gray-300 flex justify-between items-center">
      <div className="flex items-center">
        <strong className="ml-2">WanRun</strong>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            className="w-10 h-10 rounded-full"
            src={DogImage}
            alt="DogImage"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/">ホーム</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dog">愛犬</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dogrun">ドッグラン</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>設定</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>ログアウト</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
