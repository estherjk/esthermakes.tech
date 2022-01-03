import { FC } from 'react';

export const UnorderedList: FC = ({ children, ...props }) => {
  return (
    <ul className="list-disc list-outside ml-8" {...props}>
      {children}
    </ul>
  );
};
