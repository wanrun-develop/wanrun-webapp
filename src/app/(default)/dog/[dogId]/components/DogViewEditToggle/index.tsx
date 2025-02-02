import { useState } from 'react';
import DogForm from '../DogForm';
import DogDetail from '../DogDetail';
import useSearchDog from '@hooks/dog/useSearchDog';

type Props = {
  dogId: number;
};

const DogViewEditToggle = (props: Props) => {
  const { dogId } = props;
  const [isEdit, setIsEdit] = useState(false);
  const { dogs, loading, error } = useSearchDog({ params: { dogId } });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error: {error}</p>;
  }

  const dog = dogs && dogs.length > 0 ? dogs[0] : null;

  if (!dogId || !dog) {
    return <p>not found</p>;
  }

  console.log(dogId, dog);

  return (
    <div>
      {isEdit ? (
        <DogForm
          dog={dog}
          afterSubmission={() => setIsEdit(false)}
          onCancel={() => setIsEdit(false)}
        />
      ) : (
        <DogDetail dog={dog} moveToForm={() => setIsEdit(true)} />
      )}
    </div>
  );
};

export default DogViewEditToggle;
