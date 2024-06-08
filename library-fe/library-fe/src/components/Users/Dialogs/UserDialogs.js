import {useLibraryAction} from "@/contexts/libraryActions";
import {LIBRARY_ACTION as DENTAL_CLINIC_ACTION} from "@/constants/libraryAction";
import {UpdateUserDialog} from "@/components/Users/Dialogs/UpdateUserDialog";
import {DeleteUserDialog} from "@/components/Users/Dialogs/DeleteUserDialog";

export const UserDialogs = () => {
    const { state: { type }} = useLibraryAction();

    return(
        <>
            <UpdateUserDialog isOpen={ type === DENTAL_CLINIC_ACTION.Update }>

            </UpdateUserDialog>
            <DeleteUserDialog isOpen={ type === DENTAL_CLINIC_ACTION.Delete }>

            </DeleteUserDialog>
        </>
    );
}