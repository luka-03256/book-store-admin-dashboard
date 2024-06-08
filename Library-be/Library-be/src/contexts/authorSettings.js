'use client';

import {createContext, useContext, useReducer} from "react";

export const authorSettingsContext = createContext(null);

export function userSettingsReducer(state, action) {
    let currentState = state;


    switch (action.type) {
        case "changeFirstName":
            currentState = {
                "authorFirstName": state.authorFirstName,
                "firstName": action.payload
            }
            break;
        case "changeLastName":
            currentState = {
                "authorLastName": state.authorLastName,
                "lastName": action.payload
            }
            break;
        case "changeDateOfBirth":
            currentState = {
                "authorDateOfBirth": state.authorDateOfBirth,
                "dateOfBirth": action.payload
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
        "firstName": "lukaS",
        "lastName": "",
        "dateOfBirth": ""
    }

    const [state, dispatch] = useReducer(userSettingsReducer, initialState);

    return (<authorSettingsContext.Provider value={{state, dispatch}}>
        {children}
    </authorSettingsContext.Provider>);
}

export const useAuthorSettings = () => {
    const context = useContext(authorSettingsContext);

    if (context === undefined) {
        throw new Error(
            'useAuthorSettings must be used within a AuthorSettingsProvider',
        );
    }

    return {state: context.state, dispatch: context.dispatch};
};
