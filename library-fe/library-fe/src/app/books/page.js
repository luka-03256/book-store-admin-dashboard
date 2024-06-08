"use client";

import useFetchCallback from "@/hooks/useFetchCallback";
import Link from "next/link";


export default function Book() {

    const {data, loading, error, fetchData} = useFetchCallback(`http://localhost:5287/Book/GetOne?Id=66223405464f04e9f8acab6d`);


    let component;

    if (error) {
        component = <p>{error}</p>;
    } else {
        component =
            <>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.publisher}</p>
                <p>{data.description}</p>
                <p>{data.AuthorIds}</p>

            </>;
    }
    //{"_id":{"$oid":"66223405464f04e9f8acab6d"},
    // "Name":"Alien Covenant","Publisher":"Disney","Description":"string",
    // "Author":{"ID":{"$oid":"66223355464f04e9f8acab68"}},"AuthorEmbeded":{"_id":{"$oid":"66223355464f04e9f8acab68"},
    // "FirstName":"Milos","DateOfBirth":"27.03.1985","LastName":"Milosevic"}}

// {"_id":{"$oid":"661d774fcf1e30800d23f807"},"Name":"New Book","Publisher":"Test Publisher",
    //     "Description":"New book in our collection","Author":{"ID":{"$oid":"661cf59d134e028e5b0adf1b"}},
    //     "AuthorEmbeded":{"_id":{"$oid":"661cf59d134e028e5b0adf1b"},
    //     "FirstName":"Michael","DateOfBirth":"12.02.1965","LastName":"Straug"}}
    return (
        <>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <Link href={'/'} className={'btn btn-small btn-outline-secondary'}>
                                    <i className="bi bi-arrow-left me-3"></i>
                                    Go to home page
                                </Link>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <Link href={'/books/create'} className={'btn btn-small btn-success'}>
                                    Change
                                    <i className="bi bi-arrow-right ms-3"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading === true ? <p>Loading...</p> : component}
            <button onClick={() => fetchData()}>Refresh data</button>
        </>
    );
}
