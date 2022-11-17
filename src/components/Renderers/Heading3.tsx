import { FC } from 'react';

type Props = {
  children?: React.ReactNode;
};

export const Heading3: FC<Props> = ({ children, ...props }) => {
  return (
    <h3 className="mt-4" {...props}>
      {children}
    </h3>
  );
};
