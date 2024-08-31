import React, { PropsWithChildren } from 'react';
import { Template } from './Template';
import '../styles.css';

interface UnauthenticatedTemplateProps extends PropsWithChildren {
  activePath: string;
}

export const UnauthenticatedTemplate: React.FC<
  UnauthenticatedTemplateProps
> = ({ children, activePath }) => {
  return <Template activePath={activePath}>{children}</Template>;
};
