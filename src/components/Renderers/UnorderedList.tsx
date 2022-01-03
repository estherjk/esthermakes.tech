import { FC } from 'react';

export const UnorderedList: FC = ({ children, ...props }) => {
  return (
    <ul className="list-disc list-outside ml-8 mb-4" {...props}>
      {children}
    </ul>
  );
};
