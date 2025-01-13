'use client';

import AuthModal from '@/components/auth/AuthModal';
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
import { useState } from 'react';

const Header = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

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
            <DropdownMenuItem onClick={() => setOpenLogin(true)}>
              ログイン
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenSignup(true)}>
              登録
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AuthModal open={openLogin} setOpen={setOpenLogin} type="login" />
      <AuthModal open={openSignup} setOpen={setOpenSignup} type="signup" />
    </div>
  );
};

export default Header;
