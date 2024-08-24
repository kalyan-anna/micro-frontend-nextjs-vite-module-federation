import React, { PropsWithChildren } from 'react';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto">
      <div className="min-h-screen flex flex-col">{children}</div>
    </div>
  );
};
