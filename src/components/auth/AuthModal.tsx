import { useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { Separator } from '../ui/separator';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  type: 'login' | 'signup';
};

const AuthModal = (props: Props) => {
  const { open, setOpen, type } = props;

  const isLogin = type === 'login';
  const title = useMemo(() => (isLogin ? 'ログイン' : '登録'), [isLogin]);

  const onSubmitComplete = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <Separator />
        {isLogin ? (
          <LoginForm onSubmitComplete={onSubmitComplete} />
        ) : (
          <SignupForm onSubmitComplete={onSubmitComplete} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
