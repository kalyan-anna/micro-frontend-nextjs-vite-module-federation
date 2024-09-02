import { ComponentType, PropsWithChildren, useEffect } from 'react';
import '../styles.css';
import { Template } from './Template';
import { useAuthentication } from '../hooks/useAuthentication';
import { Spinner } from './Spinner';

interface AuthenticatedTemplateProps extends PropsWithChildren {
  activePath: string;
}

export const AuthenticatedTemplate: ComponentType<
  AuthenticatedTemplateProps
> = ({ children, activePath }) => {
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/';
    }
  }, [isAuthenticated]);

  return (
    <Template activePath={activePath}>
      {isAuthenticated ? children : <Spinner />}
    </Template>
  );
};
