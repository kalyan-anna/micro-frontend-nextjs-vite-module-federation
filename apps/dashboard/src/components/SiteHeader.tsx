import dynamic from 'next/dynamic';

export const SiteHeader = dynamic(
  () => import('shared-app/SiteHeader').then((mod) => mod.SiteHeader),
  {
    ssr: false,
  }
);
