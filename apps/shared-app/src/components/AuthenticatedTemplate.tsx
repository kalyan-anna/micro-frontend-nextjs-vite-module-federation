import { ComponentType, PropsWithChildren } from 'react';
import '../styles.css';
import { Template } from './Template';

interface AuthenticatedTemplateProps extends PropsWithChildren {
  activePath: string;
}

export const AuthenticatedTemplate: ComponentType<
  AuthenticatedTemplateProps
> = ({ children, activePath }) => {
  return <Template activePath={activePath}>{children}</Template>;
};
