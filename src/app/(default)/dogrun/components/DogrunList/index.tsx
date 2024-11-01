import { useMemo } from 'react';
import DogrunItem from '../DogrunItem';
import styles from './DogrunList.module.scss';
import { Dogrun } from '@/types/Dogrun';

type Props = {
  dogruns: Dogrun[];
};

const DogrunList = (props: Props) => {
  const { dogruns } = props;

  const dogrunItems = useMemo(
    () =>
      dogruns.map((dogrun, i) => (
        <div className={styles.item} key={`dogrun-item${i}`}>
          <DogrunItem dogrun={dogrun} />
        </div>
      )),
    [dogruns],
  );

  return <div className={styles.container}>{dogrunItems}</div>;
};

export default DogrunList;
