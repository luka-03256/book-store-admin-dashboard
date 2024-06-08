import {useLibraryAction} from "@/contexts/libraryActions";
import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import {LibraryModal} from "@/components/Shared/LibraryModal";
import {LIBRARY_ACTION} from "@/constants/libraryAction";
import {useEffect, useState} from "react";

export const UpdateCategoryDialog = ({isOpen}) => {
    const {dispatch, state: {row}} = useLibraryAction();

    const [saveResponse, setSaveResponse] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors}
    } = useForm();

    const {fetchData} = useFetchCallbackWithMethod("http://localhost:5287/category/update", "PUT");

    useEffect(() => {
        setValue('id', row.id);
        setValue('name', row.name);
    }, [row.id, row.name, setValue]);

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



                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="email" className="form-control" placeholder="comedy"
                                           {...register("name", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.name &&
                                        <span className={'text-danger'}>{errors.name.message}</span>}
                                </div>

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
                                        Update category
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