import { useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { Separator } from '../ui/separator';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmitComplete: () => void;
  type: 'login' | 'signup';
};

const AuthModal = (props: Props) => {
  const {
    open,
    setOpen,
    onSubmitComplete: onParentSubmitComplete,
    type,
  } = props;

  const isLogin = type === 'login';
  const title = useMemo(() => (isLogin ? 'ログイン' : '登録'), [isLogin]);

  const onSubmitComplete = () => {
    setOpen(false);
    onParentSubmitComplete();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-4/5 sm:w-full">
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
