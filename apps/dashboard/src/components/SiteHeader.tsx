import Image from 'next/image';
import React from 'react';

export const SiteHeader = () => {
  return (
    <header className="bg-gray-500">
      <div className="flex justify-between px-3">
        <div className="inline-flex items-center">
          <Image src="/logo.png" width={50} height={50} alt="Logo" />
        </div>
        <div className="p-1 flex flex-row items-center">
          <a
            href="https://github.com"
            className="text-white p-2 mr-2 no-underline hidden md:block lg:block"
            target="_blank"
          >
            Github
          </a>
          <Image src="/avatar.png" width={50} height={50} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};
