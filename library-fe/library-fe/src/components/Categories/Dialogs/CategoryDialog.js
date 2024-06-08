import {useLibraryAction} from "@/contexts/libraryActions";
import {LIBRARY_ACTION} from "@/constants/libraryAction";
import {UpdateCategoryDialog} from "@/components/Categories/Dialogs/UpdateCategoryDialog";
import {DeleteCategoryDialog} from "@/components/Categories/Dialogs/DeleteCategoryDialog";

export const CategoryDialogs = () => {
    const {state: { type }} = useLibraryAction();

    return (
        <>
            <UpdateCategoryDialog isOpen={ type === LIBRARY_ACTION.Update }>

            </UpdateCategoryDialog>
            <DeleteCategoryDialog isOpen={ type === LIBRARY_ACTION.Delete }>

            </DeleteCategoryDialog>
        </>
    );
}