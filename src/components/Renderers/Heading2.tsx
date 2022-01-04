import { FC } from 'react';

export const Heading2: FC = ({ children, ...props }) => {
  return (
    <h2 className="mt-8" {...props}>
      {children}
    </h2>
  );
};
