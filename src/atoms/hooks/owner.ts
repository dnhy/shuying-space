import { useAtomValue } from 'jotai';
import { isLoggedAtom } from '../owner';

export const useIsLogged = () => useAtomValue(isLoggedAtom);
