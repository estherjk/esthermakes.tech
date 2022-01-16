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
        className="flex-1 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-500 no-underline"
        rel="noreferrer">
        <img className="w-full" src={image} alt={description} />

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
