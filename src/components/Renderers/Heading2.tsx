import { FC } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Heading2: FC<Props> = ({ children, ...props }) => {
  return (
    <h2 className="mt-8" {...props}>
      {children}
    </h2>
  );
};
