import React, { useEffect, useState } from 'react';
import API from '../api';

export async function getPersons() {
    return axios.get(`/users`)
}

export default function PersonList() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        API.get(`/users`)
            .then(res => {
                const data = res.data;
                setPersons(data);
            })
    }, []);

    return (
        <ul>
            {persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
    )
}