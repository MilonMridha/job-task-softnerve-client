import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';


const SingleStudent = () => {
    const {id} = useParams()
    
    const [detail, setDetail] = useState({});
    const [update, setUpdate] = useState({})
    useEffect(() => {
        const url = `https://secret-sea-15721.herokuapp.com/students/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [update]);

    const updateUser = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value
        const section = e.target.section.value;
        const roll = e.target.roll.value;
        const updateStudent = { name, email, section, roll};

        fetch(`https://secret-sea-15721.herokuapp.com/students/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(updateStudent),

        })
            .then(res =>res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    toast.success("Update successful");
                    e.target.reset()
                    setUpdate(updateStudent)
                }
            })
    }
    return (
        <div className='mt-10'>
           <h1 className='text-2xl font-semibold'>Name: {detail.name}</h1>
            <h1 className='text-xl font-semibold'>Email: {detail.email}</h1>
            <h1 className='text-xl font-semibold'>Section: {detail.section}</h1>
            <h1 className='text-xl font-semibold'>Roll: {detail.roll}</h1>
            <h1 className='text-xl font-semibold'>ID: {detail._id}</h1>

            <section className='w-1/3 mx-auto mt-20 pb-10'>
            <div>
                <h2 className='text-2xl font-semibold mb-5'>Update Information</h2>
                <form onSubmit={updateUser}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="name" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                        
                        <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />
                        
                        <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="section" id="section" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />

                        <label for="section" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Section</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="roll" id="Roll" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required autoComplete='off' />

                        <label for="Roll" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Roll</label>
                    </div>

                    <input type="submit" className="text-white bg-purple-900 hover:bg-purple-500 focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center " value="Update Now" />
                </form>
            </div>


        </section>
        </div>
    );
};

export default SingleStudent;