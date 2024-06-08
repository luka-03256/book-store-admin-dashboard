import {createContext, useContext, useReducer} from "react";
import {LIBRARY_ACTION} from "@/constants/libraryAction";

export const libraryActionContext = createContext();

export function libraryActionReducer(state, action) {
    switch (action.type) {
        case LIBRARY_ACTION.Update:
            return {type: LIBRARY_ACTION.Update, row: action.row};
        case LIBRARY_ACTION.Delete:
            return {type: LIBRARY_ACTION.Delete, row: action.row};
        // case LIBRARY_ACTION.Reload:
        //     return {type: null, reload: true}
        case LIBRARY_ACTION.StateReset:
            return {type: null, row: {}, reload: true};
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

export const LibraryActionProvider = ({children}) => {
    let initialState = {
        type: null,
        row: {},
        reload: false
    }

    const [state, dispatch] = useReducer(libraryActionReducer, initialState);

    const value = {state, dispatch};


    return (<libraryActionContext.Provider value={value}>
        {children}
    </libraryActionContext.Provider>);
}

export const useLibraryAction = () => {
    const context = useContext(libraryActionContext);

    if (context === undefined) {
        throw new Error(
            'libraryActionContext must be used within a LibraryActionProvider',
        );
    }

    return context;
};