import React from 'react';
import { useQuery } from 'react-query';
import StudentRow from './StudentRow';

const GetStudents = () => {

    const { data: students, refetch } = useQuery('students', () => fetch('http://localhost:5000/students', {
        method: 'GET'
    }).then(res => res.json()))

    console.log(students)
    return (
        <div>
        <h1 className='text-xl font-semibold mt-5'>Get All Students: {students?.length}</h1>
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
                        <th>Detail with Id</th>
                        
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
        

    </div>
    );
};

export default GetStudents;