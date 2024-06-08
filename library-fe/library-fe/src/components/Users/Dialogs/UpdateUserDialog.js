import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useLibraryAction} from "@/contexts/libraryActions";
import {LIBRARY_ACTION} from "@/constants/libraryAction";
import {LibraryModal} from "@/components/Shared/LibraryModal";

export const UpdateUserDialog = ({isOpen}) => {
    const {dispatch, state: {row}} = useLibraryAction();

    const [saveResponse, setSaveResponse] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors}
    } = useForm();

    const {fetchData} = useFetchCallbackWithMethod("http://localhost:5287/user/update", "PUT");

    useEffect(() => {
        setValue('id', row.id);
        setValue('firstName', row.firstName);
        setValue('lastName', row.lastName);
        setValue('email', row.email);
        setValue('username', row.username);
        setValue('password', row.password);
        setValue('phoneNumber', row.phoneNumber);
    }, [row.id, row.email, row.firstName, row.lastName, row.email, row.username,
        row.password, setValue]);

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
                                    <input type="email" className="form-control" placeholder="Petar"
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

                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="name@example.com"
                                           {...register("email", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.email &&
                                        <span className={'text-danger'}>{errors.email.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="email" className="form-control" placeholder="ppetrovic"
                                           {...register("username", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.username &&
                                        <span className={'text-danger'}>{errors.username.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="email" className="form-control" placeholder="ppetrovic232"
                                           {...register("password", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.password &&
                                        <span className={'text-danger'}>{errors.password.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone number</label>
                                    <input type="email" className="form-control" placeholder="+3816511133322"
                                           {...register("phoneNumber", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 3,
                                                   message: "Minimum is 3 characters"
                                               }
                                           })}/>
                                    {errors && errors.phoneNumber &&
                                        <span className={'text-danger'}>{errors.phoneNumber.message}</span>}
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