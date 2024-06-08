'use client';
import {useLibraryAction} from "@/contexts/libraryActions";
import {UpdateUserDialog} from "@/components/Users/Dialogs/UpdateUserDialog";
import {LIBRARY_ACTION} from "@/constants/libraryAction";

export const UserDialogs = () => {
    const {state: { type }} = useLibraryAction();

    return (
        <>
            <UpdateUserDialog isOpen={type === LIBRARY_ACTION.Update}>

            </UpdateUserDialog>
            {/*remaining dialog components for user*/}
        </>
    );
}