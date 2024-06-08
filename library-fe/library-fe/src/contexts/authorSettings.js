'use client';

import {createContext, useContext, useReducer} from "react";

export const authorSettingsContext = createContext(null);

//STEP 2
export function authorSettingsReducer(state, action) {
    let currentState = state;

    //action.type - na osnovu ovoga znamo koju funkciju pokrenuti
    //action.payload - nova vrednost koja ce se koristiti u funkciji

    switch (action.type) {
        case "changeFirstName":
            currentState = {
                "userFirstName": state.userName,
                "firstName": action.payload
            }
            break;
        case "changeLastName":
            currentState = {
                "userLastName": state.lastName,
                "lastName": action.payload,
            }
            break;
        default:
            break;
    }

    return currentState;
}

//STEP 3
export const AuthorSettingsProvider = ({children}) => {
    let initialState = {
        "firstName": "Petar",
        "lastName": "Petrovic"
    }

    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = useReducer(authorSettingsReducer, initialState);

    return (<authorSettingsContext.Provider value={{state, dispatch}}>
        {children}
    </authorSettingsContext.Provider>);
}

//STEP 4
// const value = useContext(SomeContext)

//Extra feature
export const useAuthorSettings = () => {
    const context = useContext(authorSettingsContext);

    if (context === undefined) {
        throw new Error(
            'useAuthorSettings must be used within a AuthorSettingsProvider',
        );
    }

    return {state: context.state, dispatch: context.dispatch};
};
