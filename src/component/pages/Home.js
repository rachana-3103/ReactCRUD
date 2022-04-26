import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8081/api/users");
        setUsers(result.data.slice().reverse());
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:8081/api/users/${id}`);
        loadUsers();
    }
    return (
        <div className='container'>
            <div className='py-2'>
                <br></br>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Age</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <Link class='btn btn-info mr-2' to={`/user/${user._id}`}>View</Link>
                                        <Link class='btn btn-success mr-2' to={`/user/edit/${user._id}`}>Edit</Link>
                                        <Link class='btn btn-danger' onClick={() => deleteUser(user._id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default Home;