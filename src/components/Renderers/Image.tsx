import { FC } from 'react';

export const Image: FC = ({ ...props }) => {
  return (
    <div className="my-8 rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
      <img className="w-full" {...props} />
    </div>
  );
};
