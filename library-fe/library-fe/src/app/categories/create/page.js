'use client';

import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import Link from "next/link";
import {useState} from "react";

export default function CreateUserPage() {
    const [saveResponse, setSaveResponse] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {fetchData} = useFetchCallbackWithMethod("http://localhost:5287/category/create", "POST");

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
                        <Link href={'/categories'} className={'btn btn-small btn-outline-secondary'}>
                            <i className="bi bi-arrow-left me-3"></i>
                            Go to categories
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="comedy"
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
                                        setSaveResponse(true);
                                        setTimeout(() => {
                                            setSaveResponse(false);
                                        }, "5000");
                                    })();
                                }}
                            >
                                Create category
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
