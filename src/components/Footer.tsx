import { SocialMedia } from '@src/types';

export const Footer = () => {
  const socialLinks: SocialMedia[] = [
    {
      title: 'GitHub',
      url: 'https://github.com/estherjk',
      icon: 'fab fa-github',
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/c/EstherMakesTech',
      icon: 'fab fa-youtube',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/esthermakestech/',
      icon: 'fab fa-instagram',
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/esthermakestech',
      icon: 'fab fa-twitter',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/estherjunkim',
      icon: 'fab fa-linkedin-in',
    },
  ];

  return (
    <footer className="w-full">
      <div className="mx-auto px-4 md:px-8">
        <div className="grid grid-cols-6 gap-4 my-6">
          <div className="col-span-6 flex items-center justify-center md:col-span-2 md:justify-start">
            <span className="text-sm">© 2022 Esther Jun Kim</span>
          </div>

          <div className="md:col-span-2 md:flex md:justify-center md:items-center hidden">
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                return (
                  <a key={index} href={link.url} target="_blank" rel="noreferrer">
                    <i className={link.icon} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2 md:flex md:justify-end md:items-center hidden">
            <a
              href="https://github.com/estherjk/esthermakes.tech/blob/main/LICENSE"
              className="text-sm"
              target="_blank"
              rel="noreferrer">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
