'use client';

import {useCategorySettings} from "@/contexts/categorySettings";
import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import Alert from "@/components/shared/Alert";
import {useState} from "react";
import {useAuthorSettings} from "@/contexts/authorSettings";

export default function AuthorPage() {
    const [saveResponse, setSaveResponse] = useState(false);
    const {state, dispatch} = useCategorySettings();

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {data, loading, error, fetchData} = useFetchCallbackWithMethod("http://localhost:5158/category/create", "POST");
    return (
        <div>
            {saveResponse && <Alert text={'Uspesno sacuvano!'}></Alert>}
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
               Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder="Kriminalistika..."
                    {...register("name", {
                        required: "Field is required!",
                        minLength: {
                            value: 4,
                            message: "Minimum is 4 characters"
                        }
                    })}
                />
                {errors && errors.name && <span className={'text-red-600'}>{errors.name.message}</span>}
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
