import { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

type Props = {
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: Props) => {
  const { label = 'Click', onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
