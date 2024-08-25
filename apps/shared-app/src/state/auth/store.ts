import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from '../../utils/zustand.helper';

type AuthAction = {
  singIn: () => void;
  singOut: () => void;
};

type AuthState = {
  isAuthenticated: boolean;
};

const initState: AuthState = {
  isAuthenticated: false,
};

type AuthStateAndAction = AuthState & { actions: AuthAction };

const useAuthStateBase = create<AuthStateAndAction>()(
  immer(
    devtools(
      (set) => ({
        ...initState,
        actions: {
          singIn: () => {
            set({ ...initState, isAuthenticated: true }, false);
          },
          singOut: () => {
            set({ ...initState, isAuthenticated: false }, false);
          },
        },
      }),
      {
        enabled: true,
        name: 'auth-state',
        store: 'auth-state',
      }
    )
  )
);

export const useAuthState = createSelectors(useAuthStateBase);
