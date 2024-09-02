import { useAtom } from 'jotai';
import {
  authenticationAtom,
  signInAtom,
  signOutAtom,
} from '../state/auth/store';
import { useCallback } from 'react';

export const useAuthentication = () => {
  const [isAuthenticated] = useAtom(authenticationAtom);
  const [, signIn] = useAtom(signInAtom);
  const [, signOut] = useAtom(signOutAtom);
  return {
    isAuthenticated,
    signIn: useCallback(() => {
      signIn();
      window.location.href = '/dashboard';
    }, [signIn]),
    signOut: useCallback(() => {
      signOut();
      window.location.href = '/';
    }, [signOut]),
  };
};
