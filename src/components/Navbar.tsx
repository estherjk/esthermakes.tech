import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppearanceButton } from '@src/components/AppearanceControl';
import { navbarLinks } from '@src/data';

export const Navbar = () => {
  const router = useRouter();

  const renderNavbarLinks = () => {
    return navbarLinks.map((link, index) => {
      const baseStyle =
        'uppercase no-underline font-semibold hover:text-red-500 dark:hover:text-red-400';
      const activeStyle = 'text-red-500 dark:text-red-400';

      return (
        <li key={index}>
          <Link href={link.url}>
            <a className={`${baseStyle} ${router.pathname == link.url ? activeStyle : ''}`}>
              {link.title}
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <header className="flex w-full px-4 md:px-8 my-6">
      <Link href="/">
        <a>
          <img
            src="/icons/icon-logo.svg"
            alt="Logo"
            className="max-w-none w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
          />
        </a>
      </Link>

      <div className="flex flex-grow items-center">
        <nav className="flex w-full justify-center">
          <ul className="inline-flex space-x-8">{renderNavbarLinks()}</ul>
        </nav>
      </div>

      <div className="flex ml-auto items-center">
        <AppearanceButton />
      </div>
    </header>
  );
};
