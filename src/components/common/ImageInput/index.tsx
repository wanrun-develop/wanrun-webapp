import React, { ChangeEvent, MouseEventHandler, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { RefCallBack } from 'react-hook-form';

export type ImageInputProps = {
  error?: string;
};

type Props = ImageInputProps & {
  value: File;
  inputRef: RefCallBack;
  onChange: (...event: any[]) => void;
};

const ImageInput = (props: Props) => {
  const { error, inputRef, onChange } = props;
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);

    onChange(file);
    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  };

  const handleReset: MouseEventHandler<HTMLButtonElement> = (event) => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onChange(null);
  };

  return (
    <div>
      {previewUrl && (
        <Image src={previewUrl} alt="preview" width={200} height={200} />
      )}
      <Button label="reset" onClick={handleReset} />
      <input
        type="file"
        accept="image/*"
        ref={(e) => {
          inputRef(e);
          fileInputRef.current = e;
        }}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageInput;
