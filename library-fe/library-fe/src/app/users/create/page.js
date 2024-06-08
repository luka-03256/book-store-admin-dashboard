'use client';

import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import Link from "next/link";

export default function CreateUserPage() {
    const [saveResponse, setSaveResponse] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {fetchData} = useFetchCallbackWithMethod("http://localhost:5287/user/create", "POST");

    return (
        <>
            {saveResponse && (
                <div className="alert alert-success" role="alert">
                    Uspesno kreirano!
                </div>
            )}
            <div className="row mb-3">
                <div className="card">
                    <div className="card-body">
                        <Link href={'/users'} className={'btn btn-small btn-outline-secondary'}>
                            <i className="bi bi-arrow-left me-3"></i>
                            Go to users
                        </Link>
                    </div>
                </div>
            </div>
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
                            {errors && errors.email && <span className={'text-danger'}>{errors.email.message}</span>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="email" className="form-control" placeholder="ptr23"
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
                            <label className="form-label">First name</label>
                            <input type="email" className="form-control" placeholder="something23??"
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
                                        setSaveResponse(true);
                                        setTimeout(() => {
                                            setSaveResponse(false);
                                        }, "5000");
                                    })();
                                }}
                            >
                                Create user
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
