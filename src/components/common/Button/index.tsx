import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import styles from './Button.module.scss';

type Props = {
  label?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: Props) => {
  const { label = 'Click', type = 'button', disabled = false, onClick } = props;

  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
