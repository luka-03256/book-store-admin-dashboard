"use client";

import {useForm} from "react-hook-form";
import Link from "next/link";
import {useContext} from "react";
import {useAuthorSettings} from "@/contexts/authorSettings";

export default function CreateBookPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {state, dispatch} = useAuthorSettings();

    return (
        <>

            <div className="row">
                <div className="col-md-6">
                    <Link href={'/books'} className={'btn btn-small btn-outline-secondary'}>
                        <i className="bi bi-arrow-left me-3"></i>
                        Go to books page
                    </Link>
                </div>
            </div>


            <h1>{state.firstName} {state.lastName}</h1>
            <br/>
            <button onClick={() => {
                dispatch({
                    type: "changeAuthorName",
                    payload: "Michael"
                });
            }}>Change global author</button>
            <br/>
            <br/>
            <Link href={'/authors/create'}>Go to author create</Link>
            <br/>
            <input type="text" className={'border-2'} {...register("firstName", {
                required: "This field is required!",
                // validate: (value) => {
                //     let description = watch('firstName');
                //     console.log(value);
                //     console.log(description);
                //
                //     if (value !== description) {
                //         return "Name and description must be same!";
                //     }
                // },
                // validate: {
                //     max: (v) => checkMaxValue(v),
                //     min: (v) => {
                //         if (!isNaN(v)) {
                //             return (
                //                 v >= 0 || 'Min value is 0'
                //             );
                //         }
                //     },
                // }
            })}/>
            {errors && errors.firstName && <span className={"text-red-600"}>{errors.firstName.message}</span>}

            <input type="text" className={'border-2'} {...register("lastName", {
                required: "This field is required!",
            })}/>
            {errors && errors.lastName && <span className={"text-red-600"}>{errors.lastName.message}</span>}

            <button onClick={() => {
                console.log(errors);
                console.log(watch())

                handleSubmit((data) => {
                    console.log(watch())
                    console.log("Submit all data!");
                })();
            }}>Submit!
            </button>
        </>
    );
}