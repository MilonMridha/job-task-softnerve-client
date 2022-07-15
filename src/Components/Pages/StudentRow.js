import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const StudentRow = ({ user, refetch, index }) => {
    const { name, email, section, roll, _id } = user;
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate('/student/' + id)
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete');
        if (proceed) {
            const url = `https://secret-sea-15721.herokuapp.com/students/${id}`;

            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        toast.error('student Deleted Successfully')
                    }
                    refetch()

                })
        }

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{section}</td>
            <td>{roll}</td>
            <td>{_id}</td>
            <td><button onClick={() => handleUpdate(_id)} className="btn btn-xs rounded-full text-white p-2 bg-green-900">Update</button>
            </td>

            <td><button onClick={() => handleDelete(_id)} className="btn btn-xs rounded-full text-white p-2 bg-red-700">Delete</button>
            </td>

        </tr>
    );
};

export default StudentRow;