'use client';

import {createContext, useContext, useReducer} from "react";
//STEP 1
export const bookSettingsContext = createContext();
//STEP 2
export function bookSettingsReducer(state, action) {
    let currentState = state;
    //action.type - na osnovu ovoga znamo koju funkciju pokrenuti
    //action.payload - nova vrednost koja ce se koristiti u funkciji
    switch (action.type) {
        case "changeName":
            currentState = {
                "bookName": state.bookName,
                "name": action.payload
            }
            break;
        case "changePublisher":
            currentState = {
                "bookPublisher": state.bookPublisher,
                "publisher": action.payload
            }
            break;
        case "changeDescription":
            currentState = {
                "bookDescription": state.bookDescription,
                "description": action.payload
            }
            break;
        case "changeAuthor":
            currentState = {
                "bookAuthor": state.bookAuthor,
                "author": action.payload
            }
            break;
        case "changeCategories":
            currentState = {
                "bookCategories": state.bookCategories,
                "categories": action.payload
            }
            break;
        default:
            break;
    }

    return currentState;
}

//STEP 3
export const BookSettingsProvider = ({children}) => {
    let initialState = {
        "name": "luka@nesto.ac.rs",
        "publisher": "lukaS",
        "description": "test@yahoo.com",
        "author": {"firstName": "Margaret", "lastName": "Atwood", "dateOfBirth": "11.18.1939"},
        "categories": [
            {"name": "Fiction"},
            {"name": "Science Fiction"},
            {"name": "Fantasy"}
        ]
    }

    const [state, dispatch] = useReducer(bookSettingsReducer, initialState);

    return (<bookSettingsContext.Provider value={{state, dispatch}}>
        {children}
    </bookSettingsContext.Provider>);
}

//STEP 4
// const value = useContext(SomeContext)
export const useBookSettings = () => {
    const context = useContext(bookSettingsContext);

    if (context === undefined) {
        throw new Error(
            'useBookrSettings must be used within a BookSettingsProvider',
        );
    }

    return {state: context.state, dispatch: context.dispatch};
};
