import { createStore } from 'jotai';
import { setGlobalStore } from 'jojoo';

const store = createStore();
setGlobalStore(store);

export const jotaiStore = store;
