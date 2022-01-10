import Link from 'next/link';
import { useRouter } from 'next/router';

import { AppearanceButton } from '@src/components/AppearanceControl';
import { navbarLinks } from '@src/data';

export const Navbar = () => {
  const router = useRouter();

  const renderNavbarLinks = () => {
    return navbarLinks.map((link, index) => {
      return (
        <Link key={index} href={link.url}>
          <a
            className={
              'uppercase no-underline font-semibold hover:text-red-500 dark:hover:text-red-400' +
              (router.pathname == link.url ? ' text-red-500 dark:text-red-400' : '')
            }>
            {link.title}
          </a>
        </Link>
      );
    });
  };

  return (
    <header className="w-full">
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-6 gap-4 my-6">
          <div className="col-span-1 flex justify-start items-center">
            <Link href="/">
              <a>
                <img src="/icons/icon-logo.svg" alt="Logo" className="w-8 h-8" />
              </a>
            </Link>
          </div>

          <div className="col-span-5 md:col-span-4 flex items-center">
            <div className="w-full flex justify-start md:justify-center space-x-8">
              {renderNavbarLinks()}
            </div>
          </div>

          {/* Don't show on small screens */}
          <div className="hidden md:col-span-1 md:flex justify-end items-center">
            <AppearanceButton />
          </div>
        </div>
      </div>
    </header>
  );
};
