import { FC } from 'react';
import { UnorderedListProps } from 'react-markdown/lib/ast-to-react';

export const UnorderedList: FC<UnorderedListProps> = ({ children, ...props }) => {
  return (
    <ul className="list-disc list-outside ml-12 mb-4" {...props}>
      {children}
    </ul>
  );
};
