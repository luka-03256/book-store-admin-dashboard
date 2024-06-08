'use client';

import {createContext, useContext, useReducer} from "react";

export const categorySettngsContext = createContext(null);
export function categorySettingsReducer(state, action) {
    let currentState = state;

    switch (action.type) {
        case "changeName":
            currentState = {
                "categoryName": state.categoryName,
                "name": action.payload
            }
            break;
        default:
            break;
    }
    return currentState;
}

export const CategorySettingsProvider = ({children}) => {
    let initialState = {
        "name": "Autobiografija"
    }
    const [state, dispatch] = useReducer(categorySettingsReducer, initialState);
    return (<categorySettngsContext.Provider value={{state, dispatch}}>
        {children}
    </categorySettngsContext.Provider>);
}

//STEP 4
// const value = useContext(SomeContext)
export const useCategorySettings = () => {
    const context = useContext(categorySettngsContext);

    if(context === undefined) {
        throw new Error('categorySettings must be used ' +
            'within a CategorySettingsProvider',);
    }
    return {state: context.state, dispatch: context.dispatch};
}