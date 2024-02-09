import { socialLinks } from '@src/data';

export const Footer = () => {
  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => {
      return (
        <li key={index}>
          <a
            href={link.url}
            title={link.title}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noreferrer">
            <i className={link.icon} />
            <span className="sr-only">{link.title}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <footer className="w-full px-4 md:px-8 my-6">
      <div className="col-span-6 flex justify-center items-center">
        <ul className="inline-flex space-x-8">{renderSocialLinks()}</ul>
      </div>
    </footer>
  );
};
