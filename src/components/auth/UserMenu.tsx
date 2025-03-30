'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, LogOut, Settings } from 'lucide-react';

export function UserMenu() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isAuthenticated = status === 'authenticated';

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
  };

  // ユーザーがログインしていない場合はログインボタンを表示
  if (!isAuthenticated) {
    return (
      <>
        <Button variant="outline" size="sm" onClick={() => signIn('github')}>
          GitHubでログイン
        </Button>
        <Button variant="outline" size="sm" onClick={() => signIn('line')}>
          LINEでログイン
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            fetch('http://localhost:3000/api/debug').then((res) => res.json())
          }
        >
          debug
        </Button>
      </>
    );
  }

  // ユーザーがログインしている場合はドロップダウンメニューを表示
  const userInitial = session?.user?.name?.charAt(0) || 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session?.user?.image || ''} alt="ユーザー" />
            <AvatarFallback>{userInitial}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{session?.user?.name}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => router.push('/setting')}
        >
          <Settings className="h-4 w-4" />
          <span>設定</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2 text-red-600"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span>ログアウト</span>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              fetch('http://localhost:3000/api/debug').then((res) => res.json())
            }
          >
            debug
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
