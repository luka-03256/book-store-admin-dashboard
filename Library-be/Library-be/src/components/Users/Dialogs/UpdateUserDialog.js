'use client';

import {useLibraryAction} from "@/contexts/libraryActions";
import {useEffect, useState} from "react";
import {set, useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import {LibraryModal} from "@/components/shared/LibraryModal";
import {LIBRARY_ACTION} from "@/constants/libraryAction";


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

    const {fetchData} = useFetchCallbackWithMethod("http://localhost:5134/user/update","PUT");

    useEffect(() => {
        setValue('id',row.id);
        setValue('firstName',row.firstName);
        setValue('lastName', row.lastName);
        setValue('email', row.email);
        setValue('username', row.username);
        setValue('password',row.password);
    }, [row.id,row.firstName,row.lastName,row.email,row.username,row.password,setValue]);

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
                                    <input type="text" className="form-control" placeholder="Dragan"
                                           {...register("firstName", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 5,
                                                   message: `Minimum is 5 characters`
                                               }
                                           })}/>
                                    {errors && errors.firstName &&
                                        <span className={'text-danger'}>{errors.firstName.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Last name</label>
                                    <input type="text" className="form-control" placeholder="Drobnjak"
                                           {...register("firstName", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 5,
                                                   message: `Minimum is 5 characters`
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
                                                   value: 10,
                                                   message: "Minimum is 10 characters"
                                               }
                                           })}/>
                                    {errors && errors.email &&
                                        <span className={'text-danger'}>{errors.email.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="TestUSR123"
                                           {...register("username", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 5,
                                                   message: "Minimum is 5 characters"
                                               }
                                           })}/>
                                    {errors && errors.username &&
                                        <span className={'text-danger'}>{errors.username.message}</span>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="text" className="form-control" placeholder="Test33;l4/1!dh#??#325sf"
                                           {...register("password", {
                                               required: "This field is required!",
                                               minLength: {
                                                   value: 5,
                                                   message: "Minimum is 5 characters"
                                               }
                                           })}/>
                                    {errors && errors.password &&
                                        <span className={'text-danger'}>{errors.password.message}</span>}
                                </div>

                                <div className="mb-3 d-flex justify-content-end">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            handleSubmit(async (data) => {
                                                await fetchData(watch());
                                                dispatch({
                                                    type: LIBRARY_ACTION.StateReset,
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