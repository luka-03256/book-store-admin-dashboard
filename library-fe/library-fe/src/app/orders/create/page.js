"use client";

import {useForm} from "react-hook-form";
import Link from "next/link";
import {useUserSettings} from "@/contexts/userSettings";

export default function CreateOrderPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {state, dispatch} = useUserSettings();

    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <Link href={'/orders'} className={'btn btn-small btn-outline-secondary'}>
                        <i className="bi bi-arrow-left me-3"></i>
                        Go to orders page
                    </Link>
                </div>
            </div>

            <h1>{state.username}</h1>
            <p className={'text-black'}>Email: {state.email}</p>
            <br/>
            <button onClick={() => {
                dispatch({
                    type: "changeUserName",
                    payload: "username22"
                });
            }}>Change global username
            </button>
            <br/>
            <br/>
            <Link href={'/users/create'}>Go to users create</Link>
            <br/>
            <input type="text" className={'border-2'} {...register("username", {
                required: "This field is required!",
                validate: (value) => {
                    let uname = watch('username');
                    console.log(value);
                    console.log(uname);

                    if (value !== uname) {
                        return "Name and uname must be same!";
                    }
                },
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
            {errors && errors.username && <span className={"text-red-600"}>{errors.username.message}</span>}

            <input type="text" className={'border-2'} {...register("email", {
                required: "This field is required!",
            })}/>
            {errors && errors.email && <span className={"text-red-600"}>{errors.email.message}</span>}

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
