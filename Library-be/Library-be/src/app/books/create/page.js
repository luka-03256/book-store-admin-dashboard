'use client';

import {useUserSettings} from "@/contexts/userSettings";
import {useState} from "react";
import {useForm} from "react-hook-form";
import useFetchCallbackWithMethod from "@/hooks/useFetchCallbackWithMethod";
import Alert from "@/components/shared/Alert";
import useFetch from "@/hooks/useFetch";


export default function BookPage() {
    const [saveResponse, setSaveResponse] = useState(false);
    const {state, dispatch} = useUserSettings();

    // fetch exising authors and categories
    const {dataAuthors,loadingAuthors,errorAuthors} = useFetch(`http://localhost:5134/authors`);
    const [authorName,setAuthorName] = useState('');
    const dataAuthName =  [(res) => {res.firstName + " " + res.lastName}];


    const {dataCategories, loadingCategories, errorCategories} = useFetch(`http://localhost:5134/categories`);
    const [categoryName, setCategoryName] = useState('');
    const dataCateName = [(res) => {res.name}];

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const {data, loading, error, fetchData} = useFetchCallbackWithMethod("http://localhost:5134/book/create", "POST");


    return (
        /*string Name, string Description, string AuthorId, List<string> AuthorIds, List<string> CategoryIds*/
        <div>
            <h1>{state.name}</h1>
            <br/>
            {saveResponse && <Alert text={'Uspesno sacuvano!'}></Alert>}
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder="TestKnjiga"
                    {...register("name", {
                        required: "Field is required!",
                        minLength: {
                            value: 5,
                            message: "Minimum is 5 characters"
                        }
                    })}
                />
                {errors && errors.name && <span className={'text-red-600'}>{errors.name.message}</span>}
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder="TestIzdavac"
                    {...register("publisher", {
                        required: "Field is required!",
                        minLength: {
                            value: 5,
                            message: "Minimum is 5 characters"
                        }
                    })}
                />
                {errors && errors.publisher && <span className={'text-red-600'}>{errors.publisher.message}</span>}
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    placeholder="TestOpis"
                    {...register("description", {
                        required: "Field is required!",
                        minLength: {
                            value: 5,
                            message: "Minimum is 5 characters"
                        }
                    })}
                />
                {errors && errors.description && <span className={'text-red-600'}>{errors.description.message}</span>}
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <label>
                    Choose author:
                    <select {...register("author", {})}
                            value={authorName} onChange={r => setAuthorName('author',r.target.value)} name="selectedAuthor">
                        {dataAuthName.map(<option>{opt}</option>)}
                    </select>
                </label>
                {errors && errors.author && <span className={'text-red-600'}>{errors.author.message}</span>}
            </div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <label>
                    Choose author:
                    <select {...register("category")}
                        value={categoryName} onChange={r => setCategoryName('category', r.target.value)} name="selectedCategory">
                        {dataCateName.map(<option>{opt}</option>)}
                    </select>
                </label>
                {errors && errors.author && <span className={'text-red-600'}>{errors.author.message}</span>}
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