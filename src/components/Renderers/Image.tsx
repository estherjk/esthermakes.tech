import { FC } from 'react';

export const Image: FC = ({ children, ...props }) => {
  return (
    // NOTE: This triggers a warning `<div> cannot appear as a descendant of <p>`
    // Unable to find the right fix right now
    <div className="my-8 border dark:border-none rounded overflow-hidden">
      <img className="w-full" {...props}>
        {children}
      </img>
    </div>
  );
};
