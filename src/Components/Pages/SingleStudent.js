import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const SingleStudent = () => {
    const {id} = useParams()
    
    const [detail, setDetail] = useState({});
    const [update, setUpdate] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/students/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [update]);
    return (
        <div>
           <h1 className='text-2xl font-semibold'>Name: {detail.name}</h1>
            <h1 className='text-xl font-semibold'>Email: {detail.email}</h1>
            <h1 className='text-xl font-semibold'>Section: {detail.section}</h1>
            <h1 className='text-xl font-semibold'>Roll: {detail.roll}</h1>
            <h1 className='text-xl font-semibold'>ID: {detail._id}</h1>
        </div>
    );
};

export default SingleStudent;