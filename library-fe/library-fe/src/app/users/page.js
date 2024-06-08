'use client';

import {useLibraryAction} from "@/contexts/libraryActions";
import {LIBRARY_ACTION} from "@/constants/libraryAction";
import useFetchCallback from "@/hooks/useFetchCallback";
import {useEffect, useState} from "react";
import DataTable from 'react-data-table-component';
import Link from "next/link";
import {UserDialogs} from "@/components/Users/Dialogs/UserDialogs";

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'First name',
        selector: row => row.firstName,
    },
    {
        name: 'Last name',
        selector: row => row.lastName,
    },
    {
        name: 'Email',
        selector: row => row.email,
    },
    {
        name: 'Username',
        selector: row => row.username,
    },
    {
        name: 'Password',
        selector: row => row.password,
    },
    {
        name: 'PhoneNumber',
        selector: row => row.phoneNumber,
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
        }
    },
    {
        name: 'Delete',
        cell: row => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const {dispatch} = useLibraryAction();

            return (
                <button className={'btn btn-small btn-outline-danger'} onClick={() => {
                    dispatch({
                        type: LIBRARY_ACTION.Delete,
                        row: row
                    });
                }}><i className="bi bi-pencil"></i></button>
            );
        }
    }
];

export default function UsersPage() {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const {
        data,
        loading,
        error,
        fetchData
    } = useFetchCallback(`http://localhost:5287/User/GetListPaginationDetails?PageNumber=${pageNumber}&PageSize=${pageSize}`);

    const {state: {reload}} = useLibraryAction();

    useEffect(() => {
        if (reload) {
            fetchData();
        }
    }, [fetchData, reload]);

    const handlePageChange = page => {
        setPageNumber(page);
    };

    const handlePerRowsChange = async (newPerPage) => {
        setPageSize(newPerPage);
    };

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
                                <Link href={'/users/create'} className={'btn btn-small btn-success'}>
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
            <UserDialogs/>
        </>
    )


}
