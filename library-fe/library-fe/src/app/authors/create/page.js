'use client';

import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import Link from "next/link";
import {useState} from "react";

export default function CreateAuthorPage() {
    const [saveResponse, setSaveResponse] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {fetchData} = useFetchCallbackWithMethod("http://localhost:5287/author/create", "POST");

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
                        <Link href={'/authors'} className={'btn btn-small btn-outline-secondary'}>
                            <i className="bi bi-arrow-left me-3"></i>
                            Go to authors
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
                            <label className="form-label">Date of birth</label>
                            <input type="date" className="form-control" placeholder="01.01.1991"
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
                            <input type="text" className="form-control" placeholder="Petrovic"
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
                                        setSaveResponse(true);
                                        setTimeout(() => {
                                            setSaveResponse(false);
                                        }, "5000");
                                    })();
                                }}
                            >
                                Create author
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
