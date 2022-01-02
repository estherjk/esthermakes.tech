import { Project } from '@src/types';

type Props = Project;

export const ProjectCard = (props: Props) => {
  const { title, image, description, url } = props;

  return (
    <a
      href={url}
      target="_blank"
      className="no-underline hover:text-black dark:hover:text-white"
      rel="noreferrer">
      <div className="max-w-xs rounded overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
        <img className="w-full" src={image} alt={description} />
        <div className="px-4 py-2">
          <h2 className="text-base">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
};
