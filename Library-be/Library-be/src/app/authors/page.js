'use client';

import {useEffect, useState} from "react";
import useFetchCallback from "@/hooks/useFetchCallback";
import DataTable from 'react-data-table-component';
import Link from "next/link";
import {useLibraryAction} from "@/contexts/libraryActions";
import {LIBRARY_ACTION} from "@/constants/libraryAction";

const columns = [
    {
        name: 'First Name',
        selector: row => row.firstName,
    },
    {
        name: 'Date Of Birth',
        selector: row => row.dateOfBirth,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
    },
    {
        name: 'Options',
        cell: row => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const {dispatch} = useLibraryAction();

            return (
                <button className={'btn btn-small btn-outline-secondary'} onClick={() => {
                    dispatch({
                        type: LIBRARY_ACTION.Update,
                        row: row
                    });
                }}><i className="bi bi-pencil"></i></button>
            );
        },
    }
    // {
    //     name: 'Options',
    //     cell: (row) => (
    //         <Link href={`/authors/delete?id=${row.id}`} className={'btn btn-small btn-outline-secondary'}>
    //             <i className="bi bi-pencil"></i>
    //         </Link>
    //     ),
    // }

]

export default function AuthorsPage() {
    const[pageNumber, setPageNumber] = useState(1); // initial page number set to 1; but can be changed during execution
    const[pageSize, setPageSize] = useState(10);

    const{data,loading,error, fetchData} = useFetchCallback(`http://localhost:5287/Author/GetListPaginationDetails?PageNumber=${pageNumber}&PageSize=${pageSize}`);
    const {state: {reload}} = useLibraryAction();

    useEffect(() => {
        if(reload) {
            fetchData();
        }
    }, [fetchData, reload]);

    console.log(data);

    const handlePageChange = (page) => {
        setPageNumber(page);
    }

    const handlePerRowsChange = async (changePerPage) => {
        setPageSize(changePerPage);
    }


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
                                <Link href={'/authors/create'} className={'btn btn-small btn-success'}>
                                    Create
                                    <i className="bi bi-arrow-right ms-3"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <DataTable
                    title="Users"
                    columns={columns}
                    data={data.results}
                    progressPending={loading}
                    pagination
                    paginationServer
                    paginationTotalRows={data.totalCount}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}/>
            </div>
        </>
    );


}