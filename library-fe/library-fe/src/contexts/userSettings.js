'use client';

import {createContext, useContext, useReducer} from "react";


//STEP 1
export const userSettingsContext = createContext(null);

//STEP 2
export function userSettingsReducer(state, action) {
    let currentState = state;

    //action.type - na osnovu ovoga znamo koju funkciju pokrenuti
    //action.payload - nova vrednost koja ce se koristiti u funkciji

    switch (action.type) {
        case "changeUserName":
            currentState = {
                "userName": state.userName,
                "username": action.payload
            }
            break;
        case "changeEmail":
            currentState = {
                "Email": state.email,
                "email": action.payload
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
        "username": "petrovic11",
        "email": "petrovic.drazen.88@mail.com",
    }

    // noinspection JSCheckFunctionSignatures
    const [state, dispatch] = useReducer(userSettingsReducer, initialState);

    return (<userSettingsContext.Provider value={{state, dispatch}}>
        {children}
    </userSettingsContext.Provider>);
}

//STEP 4
// const value = useContext(SomeContext)

//Extra feature
export const useUserSettings = () => {
    const context = useContext(userSettingsContext);

    if (context === undefined) {
        throw new Error(
            'useUserSettings must be used within a UserSettingsProvider',
        );
    }

    return {state: context.state, dispatch: context.dispatch};
};
