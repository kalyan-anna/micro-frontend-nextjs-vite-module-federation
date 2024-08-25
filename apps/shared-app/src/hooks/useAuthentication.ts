import { useAuthState } from '../state/auth/store';

export const useAuthentication = () => {
  const isAuthenticated = useAuthState.use.isAuthenticated();
  const { singIn, singOut } = useAuthState.use.actions();

  return {
    isAuthenticated,
    singIn,
    singOut,
  };
};
