import {createContext} from 'react';

export const GlobalContext = createContext({
    tasks: [
        {
            id: "1",
            title: 'title one',
            description: 'some description',
            done: false
        },
        {
            id: "2",
            title: 'title two',
            description: 'some description 2',
            done: false
        }
    ],
});

export const ContextProvider = ({children}) => {
    return <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
}