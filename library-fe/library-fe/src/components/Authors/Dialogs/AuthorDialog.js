import {useLibraryAction} from "@/contexts/libraryActions";
import {LIBRARY_ACTION} from "@/constants/libraryAction";
import {UpdateAuthorDialog} from "@/components/Authors/Dialogs/UpdateAuthorDialog";
import {DeleteAuthorDialog} from "@/components/Authors/Dialogs/DeleteAuthorDialog";
export const AuthorDialogs = () => {
    const { state: { type }} = useLibraryAction();

    return(
        <>
            <UpdateAuthorDialog isOpen={ type === LIBRARY_ACTION.Update }>

            </UpdateAuthorDialog>
            <DeleteAuthorDialog isOpen={ type === LIBRARY_ACTION.Delete }>

            </DeleteAuthorDialog>
        </>
    );

}