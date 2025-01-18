import { AnimatePresence } from 'motion/react';
import { RefObject } from 'react';
import * as motion from 'motion/react-client';

type Props = {
  open: boolean;
  //   onClose: () => void;
  children: React.ReactNode;
  containerRef: RefObject<HTMLDivElement>;
};

const DogrunBottomSheet = (props: Props) => {
  const { open, children, containerRef } = props;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute w-screen h-full"
          initial={{ y: 0 }}
          animate={{ y: -(containerRef.current?.clientHeight || 0) }}
          exit={{ y: 0 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DogrunBottomSheet;
