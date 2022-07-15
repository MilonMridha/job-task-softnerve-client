import React from 'react';
import { useQuery } from 'react-query';
import StudentRow from './StudentRow';
import { Link } from "react-router-dom";
const GetStudents = () => {

    const { data: students, refetch } = useQuery('students', () => fetch('https://secret-sea-15721.herokuapp.com/students', {
        method: 'GET'
    }).then(res => res.json()))

    console.log(students)
    return (
        <div className='mt-10'>
        <h1 className='text-xl font-semibold'>All Students: {students?.length}</h1>
        <div className='flex justify-end px-10'>
        
        </div>
        <div className="overflow-x-auto mt-5 px-5">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Section</th>
                        <th>Roll</th>
                        <th>ID</th>
                        <th>Update with Id</th>
                        
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        students?.map((user, index) => <StudentRow
                        user={user}
                            index={index}
                            key={user._id}
                            refetch={refetch}>

                        </StudentRow>
                        )
                    }

                </tbody>
            </table>

           
        </div>
        
        <div className='mt-20'>
        <Link className="text-white bg-purple-900 mt-20 hover:bg-purple-500 focus:ring-4 focus:outline-none  font-medium text-sm w-full sm:w-auto px-5 py-5 text-center " to="/add"> Post Information</Link>
        </div>
    </div>
    );
};

export default GetStudents;