import { useState } from 'react';
import DogForm from '../DogForm';
import DogDetail from '../DogDetail';

const DogViewEditToggle = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {isEdit ? (
        <DogForm moveToDetail={() => setIsEdit(false)} />
      ) : (
        <DogDetail moveToForm={() => setIsEdit(true)} />
      )}
    </div>
  );
};

export default DogViewEditToggle;
