import Image from 'next/image';

import { Project } from '@src/types';
import { formatDate } from '@src/util';

type Props = Project;

export const ProjectCard = (props: Props) => {
  const { title, image, description, url, dateUpdated } = props;

  return (
    <div className="flex flex-col">
      <a
        href={url}
        target="_blank"
        className="flex-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 overflow-hidden hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-500 no-underline"
        rel="noreferrer">
        <div className="w-full h-44 md:h-40 lg:h-36 relative">
          <Image className="object-cover" src={image} alt={description} fill />
        </div>

        <div className="px-4 py-2">
          <h2 className="text-base mb-1">{title}</h2>
          <p className="text-xs font-normal text-gray-700 dark:text-gray-200">
            Updated {formatDate(dateUpdated)}
          </p>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-200">{description}</p>
        </div>
      </a>
    </div>
  );
};
