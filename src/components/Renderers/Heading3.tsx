import { FC } from 'react';
import { HeadingProps } from 'react-markdown/lib/ast-to-react';

export const Heading3: FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <h3 className="mt-4" {...props}>
      {children}
    </h3>
  );
};
