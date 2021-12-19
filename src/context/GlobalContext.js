import {createContext} from 'react';

export const GlobalContext = createContext({
    tasks: [],
    done: true
});