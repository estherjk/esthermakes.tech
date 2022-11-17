import { FC } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const UnorderedList: FC<Props> = ({ children, ...props }) => {
  return (
    <ul className="list-disc list-outside ml-12 mb-4" {...props}>
      {children}
    </ul>
  );
};
