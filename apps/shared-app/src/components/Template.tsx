import { ComponentType, PropsWithChildren } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';
import { SiteSideNav } from './SiteSideNav';

interface TemplateProps extends PropsWithChildren {
  activePath: string;
}

export const Template: ComponentType<TemplateProps> = ({
  children,
  activePath,
}) => {
  return (
    <div className="mx-auto">
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <SiteSideNav activePath={activePath} />
          <main className="bg-white-300 flex-1 p-8 overflow-hidden">
            {children}
          </main>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
};
