import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const authenticationAtom = atomWithStorage('auth', false);

export const signInAtom = atom(null, (get, set) => {
  set(authenticationAtom, true);
});

export const signOutAtom = atom(null, (get, set) => {
  set(authenticationAtom, false);
});
