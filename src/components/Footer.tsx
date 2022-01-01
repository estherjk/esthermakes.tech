import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto px-4 md:px-8">
        <div className="grid grid-cols-6 gap-4 my-6">
          <div className="col-span-6 flex items-center justify-center md:col-span-2 md:justify-start">
            <span className="text-sm">© 2022 Esther Jun Kim</span>
          </div>

          <div className="md:col-span-2 md:flex md:justify-center md:items-center hidden">
            Social Media Icons
          </div>

          <div className="md:col-span-2 md:flex md:justify-end md:items-center hidden">
            <Link href="https://github.com/estherjk/esthermakes.tech/blob/main/LICENSE">
              <a className="text-sm">License</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
