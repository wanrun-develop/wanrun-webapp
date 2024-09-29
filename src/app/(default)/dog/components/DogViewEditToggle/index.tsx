import { useState } from 'react';
import DogForm from '../DogForm';
import DogDetail from '../DogDetail';

type Props = {
  dogId: number;
};

const DogViewEditToggle = (props: Props) => {
  const { dogId } = props;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {isEdit ? (
        <DogForm dogId={dogId} moveToDetail={() => setIsEdit(false)} />
      ) : (
        <DogDetail dogId={dogId} moveToForm={() => setIsEdit(true)} />
      )}
    </div>
  );
};

export default DogViewEditToggle;
