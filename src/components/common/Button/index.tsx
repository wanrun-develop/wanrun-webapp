import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import styles from './Button.module.scss';

type Props = {
  label?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: Props) => {
  const { label = 'Click', type = 'button', onClick } = props;

  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
