import { FC } from 'react';

export const Heading3: FC = ({ children, ...props }) => {
  return (
    <h3 className="mt-4" {...props}>
      {children}
    </h3>
  );
};
