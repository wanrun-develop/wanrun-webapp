type Props = {
  accept?: string;
};

const FileInput = (props: Props) => {
  const { accept } = props;

  return <input type="file" accept={accept} />;
};

export default FileInput;
