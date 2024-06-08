import {useLibraryAction} from "@/contexts/libraryActions";
import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import {LibraryModal} from "@/components/Shared/LibraryModal";
import {LIBRARY_ACTION} from "@/constants/libraryAction";
import {useEffect, useState} from "react";

export const DeleteUserDialog = ({isOpen}) => {
    const {dispatch, state: {row}} = useLibraryAction();

    const [saveResponse, setSaveResponse] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors}
    } = useForm();

    const id = row.id;


    const {fetchData} = useFetchCallbackWithMethod(`http://localhost:5287/user/delete?id=${id}`, "DELETE");

    // useEffect(() => {
    //     setValue('id', row.id);
    // }, [row.id, setValue]);

    return (
        <>
            <LibraryModal isOpen={isOpen} onCloseModal={() => {
                dispatch({
                    type: LIBRARY_ACTION.StateReset,
                });
            }}>
                <div className={'p-5'}>
                    <div className="row">
                        <div className="card">
                            <div className="card-body">

                                <div className="mb-3 d-flex justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            handleSubmit(async (data) => {
                                                await fetchData(watch());
                                                dispatch({
                                                    type: LIBRARY_ACTION.StateReset
                                                });
                                            })();
                                        }}
                                    >
                                        Delete user
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LibraryModal>
        </>
    );
}