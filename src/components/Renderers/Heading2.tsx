import { FC } from 'react';
import { HeadingProps } from 'react-markdown/lib/ast-to-react';

export const Heading2: FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <h2 className="mt-8" {...props}>
      {children}
    </h2>
  );
};
