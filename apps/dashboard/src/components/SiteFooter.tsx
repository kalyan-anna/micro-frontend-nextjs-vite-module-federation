import dynamic from 'next/dynamic';
import React from 'react';

export const SiteFooter = () => {
  return (
    <footer className="bg-gray-400 text-white p-2">
      <div className="flex flex-1 mx-auto">&copy; MyAnalytics</div>
    </footer>
  );
};

// export const SiteFooter = dynamic(
//   () => import('shared-app/SiteFooter').then((mod) => mod.SiteFooter),
//   {
//     ssr: false,
//   }
// );
