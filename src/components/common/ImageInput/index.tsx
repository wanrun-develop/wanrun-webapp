import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';

export type ImageInputProps = {
  error?: string;
};

type Props = ImageInputProps & {
  value: string;
  inputRef: React.Ref<HTMLInputElement>;
  onChange: (...event: any[]) => void;
};

const ImageInput = (props: Props) => {
  const { value, error, inputRef, onChange } = props;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return null;

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);

    onChange(event);
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  };

  return (
    <div>
      {previewUrl && (
        <Image src={previewUrl} alt="preview" width={200} height={200} />
      )}
      <input
        type="file"
        value={value}
        accept="image/*"
        ref={inputRef}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageInput;
