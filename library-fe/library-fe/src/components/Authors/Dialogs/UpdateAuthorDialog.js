import {useLibraryAction} from "@/contexts/libraryActions";
import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import {LibraryModal} from "@/components/Shared/LibraryModal";
import {LIBRARY_ACTION} from "@/constants/libraryAction";
import {useEffect, useState} from "react";

export const UpdateAuthorDialog = ({isOpen}) => {
    const {dispatch, state: {row}} = useLibraryAction();

    const [saveResponse, setSaveResponse] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors}
    } = useForm();

    const {fetchData} = useFetchCallbackWithMethod("http://localhost:5287/author/update", "PUT");

    useEffect(() => {
        setValue('id', row.id);
        setValue('firstName', row.firstName);
        setValue('dateOfBirth', row.dateOfBirth);
        setValue('lastName', row.lastName);
    }, [row.id, row.firstName, row.dateOfBirth, row.lastName, setValue]);

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
                                    <label className="form-label">First name</label>
                                    <input type="text" className="form-control" placeholder="Petrovic"
                                           {...register("firstName", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.firstName &&
                                        <span className={'text-danger'}>{errors.firstName.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Date of birth</label>
                                    <input type="email" className="form-control" placeholder="11.11.1992"
                                           {...register("dateOfBirth", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.dateOfBirth &&
                                        <span className={'text-danger'}>{errors.dateOfBirth.message}</span>}
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Last name</label>
                                    <input type="email" className="form-control" placeholder="Petrovic"
                                           {...register("lastName", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.lastName &&
                                        <span className={'text-danger'}>{errors.lastName.message}</span>}
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
                                        Update user
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