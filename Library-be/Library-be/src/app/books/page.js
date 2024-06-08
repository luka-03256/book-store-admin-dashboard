'use client';

import {useEffect, useState} from "react";
import useFetchCallback from "@/hooks/useFetchCallback";
import DataTable from 'react-data-table-component';
import Link from "next/link";
import {useLibraryAction} from "@/contexts/libraryActions";
import {LIBRARY_ACTION} from "@/constants/libraryAction";

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Publisher',
        selector: row => row.publisher,
    },
    {
        name: 'Description',
        selector: row => row.description,
    },
    {
        name: 'Author',
        selector: row => row.author,
    },
    {
        name: 'Categories',
        selector: row => row.categories,
    },
    {
        name: 'Options',
        cell: (row) => (
            <Link href={`/books/update?id=${row.id}`} className={'btn btn-small btn-outline-secondary'}>
                <i className="bi bi-pencil"></i>
            </Link>
        ),
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
    //         // <Link href={`/users/update?id=${row.id}`} className={'btn btn-small btn-outline-secondary'}>
    //         //     <i className="bi bi-pencil"></i>
    //         // </Link>,
    //         <Link href={`/books/delete?id=${row.id}`} className={'btn btn-small btn-outline-secondary'}>
    //             <i className="bi bi-pencil"></i>
    //         </Link>
    //     ),
    // }

]

export default function BooksPage() {
    const[pageNumber, setPageNumber] = useState(1); // initial page number set to 1; but can be changed during execution
    const[pageSize, setPageSize] = useState(10);

    const{data,loading,error, fetchData} = useFetchCallback(`http://localhost:5134/Book/GetListPaginationDetails?PageNumber=${pageNumber}&PageSize=${pageSize}`);

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
                                    {error && error.textContent}
                                </Link>
                            </div>
                            <div className="col-md-6 d-flex justify-content-end">
                                <Link href={'/books/create'} className={'btn btn-small btn-success'}>
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
                    title="Books"
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