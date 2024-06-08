'use client';

import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import Alert from "@/components/shared/Alert";
import {useState} from "react";
import {useAuthorSettings} from "@/contexts/authorSettings";

export default function AuthorPage() {
    const [saveResponse, setSaveResponse] = useState(false);
    const {state, dispatch} = useAuthorSettings();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {data, loading, error, fetchData} = useFetchCallbackWithMethod("http://localhost:5158/author/create", "POST");
    return (
        <div>
            <h1>{state.firstName+"  "+state.lastName}</h1>
            <br/>
            {saveResponse && <Alert text={'Uspesno sacuvano!'}></Alert>}
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder="Nikola..."
                    {...register("firstName", {
                        required: "Field is required!",
                        minLength: {
                            value: 5,
                            message: "Minimum is 5 characters"
                        }
                    })}
                />
                {errors && errors.firstName && <span className={'text-red-600'}>{errors.firstName.message}</span>}
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder="Dragojevic..."
                    {...register("lastname", {
                        required: "Field is required!",
                        minLength: {
                            value: 5,
                            message: "Minimum is 5 characters"
                        }
                    })}
                />
                {errors && errors.firstName && <span className={'text-red-600'}>{errors.firstName.message}</span>}
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder="28.04.199..."
                    {...register("dateOfBirth", {
                        required: "Field can not be empty!",
                        pattern: "^0?[0-9]{1,2}\.[0-9]{2}\.[0-9]{4}$"
                    })}
                />
            </div>
            <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mt-3"
                onClick={() => {
                    handleSubmit(async (data) => {
                        await fetchData(watch());
                        setSaveResponse(true);
                        setTimeout(() => {
                            setSaveResponse(false);
                        }, "1550");
                    })();
                }}
            >
                Submit
            </button>
        </div>
    )
}
