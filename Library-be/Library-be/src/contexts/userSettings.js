'use client';

import {createContext, useContext, useReducer} from "react";
//STEP 1
export const userSettingsContext = createContext();
//STEP 2
export function userSettingsReducer(state, action) {
    let currentState = state;

    //action.type - na osnovu ovoga znamo koju funkciju pokrenuti
    //action.payload - nova vrednost koja ce se koristiti u funkciji
    switch (action.type) {
        case "changeFirstName":
            currentState = {
                "userFirstName": state.userFirstName,
                "firstName": action.payload
            }
            break;
        case "changeLastName":
            currentState = {
                "userLastName": state.userLastName,
                "lastName": action.payload
            }
            break;
        case "changeEmail":
            currentState = {
                "userEmail": state.userEmail,
                "email": action.payload
            }
            break;
        case "changeUserName":
            currentState = {
                "userName": state.userName,
                "firstName": action.payload
            }
            break;
        case "changeUserPassword":
            currentState = {
                "userPassword": state.userPassword,
                "password": action.payload
            }
            break;
        default:
            break;
    }

    return currentState;
}

//STEP 3
export const UserSettingsProvider = ({children}) => {
    let initialState = {
        "userName": "luka@nesto.ac.rs",
        "firstName": "lukaS",
        "email": "test@yahoo.com",
        "username": "testUName",
        "password": "testPasswnd"
    }

    const [state, dispatch] = useReducer(userSettingsReducer, initialState);

    return (<userSettingsContext.Provider value={{state, dispatch}}>
        {children}
    </userSettingsContext.Provider>);
}

//STEP 4
// const value = useContext(SomeContext)
export const useUserSettings = () => {
    const context = useContext(userSettingsContext);

    if (context === undefined) {
        throw new Error(
            'useUserSettings must be used within a UserSettingsProvider',
        );
    }

    return {state: context.state, dispatch: context.dispatch};
};
