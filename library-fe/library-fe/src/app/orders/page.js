"use client";

import useFetchCallback from "@/hooks/useFetchCallback";
import {useLibraryAction} from "@/contexts/libraryActions";
import Link from "next/link";

export default function Order() {
    const {data, loading, error, fetchData} = useFetchCallback(`http://localhost:5287/Order/GetOne?Id=662646d2641ecf81dadf0dca`);
    let component;
//    {"_id":{"$oid":"662646d2641ecf81dadf0dca"},"UserComment":"Great book, would recommend to anyone!","User":{"ID":{"$oid":"66254443532464edfa366bfe"}},"UserEmbeded":{"_id":{"$oid":"66254443532464edfa366bfe"},"FirstName":"Dragan","LastName":"Milovanovic","Email":"dragan@proton.com","Username":"dragan995","Password":"lozinka123","PhoneNumber":"+381684231421"}}
    if (error) {
        component = <p>{error}</p>;
    } else {
        component =
            <>
                <p>{data.id}</p>
                <p>{data.userComment}</p>
                <p>{data.userEmail}</p>
            </>;
    }

    // {"_id":{"$oid":"661d782bcf1e30800d23f80a"},
    //     "UserComment":"Some Third User comment","User"
    // :{"ID":{"$oid":"661d1f90695db92923cc6b2c"}},"UserEmbeded":
    //     {"_id":{"$oid":"661d1f90695db92923cc6b2c"},"FirstName":"Drasko","LastName":"Draskovic","Email":"drale@outlook.edu",
    //         "Username":"drasko12","Password":"drasko","PhoneNumber":"063-521-5211"}}
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
                                    <Link href={'/orders/create'} className={'btn btn-small btn-success'}>
                                        Change
                                        <i className="bi bi-arrow-right ms-3"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {loading === true ? <p>Loading...</p> : component}
            <button onClick={() => fetchData() }>Refresh data</button>
        </>
    );
}