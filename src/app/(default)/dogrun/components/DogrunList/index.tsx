import { useMemo } from 'react';
import DogrunItem from '../DogrunItem';
import styles from './DogrunList.module.scss';

type Props = {};

const DogrunList = (props: Props) => {
  const dogrunItems = useMemo(
    () =>
      [...Array(16)].map((i) => (
        <div className={styles.item} key={`dogrun-item${i}`}>
          <DogrunItem />
        </div>
      )),
    [],
  );

  return <div className={styles.container}>{dogrunItems}</div>;
};

export default DogrunList;
