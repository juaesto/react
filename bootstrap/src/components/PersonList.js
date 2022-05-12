import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useApi from '../hooks/useApi';
import usersService from '../services/usersService';

export default function PersonList() {
    const getUsersApi = useApi(usersService.getUsers);

    useEffect(() => {
        getUsersApi.request();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {getUsersApi.loading && <p>Users are loading!</p>}
            {getUsersApi.error && <p>{getUsersApi.error}</p>}
            <Table striped>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {getUsersApi.data?.map(person => <tr key={person.name}><td>{person.name}</td><td>{person.email}</td></tr>)}
                </tbody>
            </Table>
        </div>
    )
}