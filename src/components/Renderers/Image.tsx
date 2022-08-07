import { FC } from 'react';

export const Image: FC = ({ ...props }) => {
  return (
    // NOTE: This triggers a warning `<div> cannot appear as a descendant of <p>`
    // Unable to find the right fix right now
    <div className="my-8 rounded border border-gray-200 dark:border-gray-700 overflow-hidden">
      <img className="w-full" {...props} />
    </div>
  );
};
