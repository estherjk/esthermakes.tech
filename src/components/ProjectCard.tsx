import { Project } from '@src/types';

type Props = Project;

export const ProjectCard = (props: Props) => {
  const { title, image, description, url } = props;

  return (
    <div className="flex flex-col">
      <div
        className={
          'flex-1 border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden hover:shadow-lg hover:shadow-gray-400 dark:hover:shadow-gray-500'
        }>
        <a href={url} target="_blank" className="no-underline" rel="noreferrer">
          <img className="w-full" src={image} alt={description} />

          <div className="px-4 py-2">
            <h2 className="text-base">{title}</h2>
            <p className="text-sm font-normal text-gray-700 dark:text-gray-200">{description}</p>
          </div>
        </a>
      </div>
    </div>
  );
};
