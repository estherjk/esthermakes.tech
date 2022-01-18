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
      <div className="grid grid-cols-6 gap-4">
        <div className="md:col-span-2 md:flex md:justify-start items-center hidden">
          <span className="text-sm text-gray-500 dark:text-gray-400">© 2022 Esther Jun Kim</span>
        </div>

        <div className="md:col-span-2 col-span-6 flex justify-center items-center">
          <ul className="inline-flex space-x-8">{renderSocialLinks()}</ul>
        </div>

        <div className="md:col-span-2 md:flex md:justify-end items-center hidden">
          <a
            href="https://github.com/estherjk/esthermakes.tech/blob/main/LICENSE"
            className="text-sm text-gray-500 dark:text-gray-400"
            target="_blank"
            rel="noreferrer">
            License
          </a>
        </div>
      </div>
    </footer>
  );
};
