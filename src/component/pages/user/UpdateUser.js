import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    let history = useHistory();
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const [age, SetAge] = useState('');
    const [mobile, SetMobile] = useState('');
    const [address, SetAddress] = useState('');
    const [gender, SetGender] = useState('');

    const onSubmit = async e => {
        const user = {
            'username': username,
            'password': password,
            'age': age,
            'mobile': mobile,
            'address': address,
            "gender": gender
        };
        e.preventDefault();
        await axios.put(`http://localhost:8081/api/users/${id}`, user);
        history.push('/home');
    };

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8081/api/users/${id}`);
        SetUsername(result.data.username);
        SetPassword(result.data.password);
        SetAge(result.data.age);
        SetMobile(result.data.mobile);
        SetAddress(result.data.address);
        SetGender(result.data.gender);
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <h4>Edit User Info</h4>
                <br></br>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group">
                        <input type="text"
                            class="form-control"
                            name="username"
                            value={username}
                            onChange={e => SetUsername(e.target.value)}
                            placeholder="Enter Username" />
                    </div>
                    <div class="form-group">
                        <input type="password"
                            class="form-control"
                            name="password"
                            value={password}
                            onChange={e => SetPassword(e.target.value)}
                            placeholder="Enter Password" />
                    </div>
                    <div class="form-group">
                        <input type="number"
                            class="form-control"
                            name="age"
                            value={age}
                            onChange={e => SetAge(e.target.value)}
                            placeholder="Enter Age" />
                    </div>
                    <div class="form-group">
                        <input type="number"
                            class="form-control"
                            name="mobile"
                            value={mobile}
                            onChange={e => SetMobile(e.target.value)}
                            placeholder="Enter Mobile" />
                    </div>
                    <div>
                        Gender:- &nbsp;
                        <div class="form-check form-check-inline">
                            Female &nbsp;
                            <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                value='Female'
                                checked={gender === 'Female'} 
                                onChange={e => SetGender(e.target.value)}
                            />
                        </div>

                        <div class="form-check form-check-inline">
                            Male &nbsp;
                            <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                value='Male'
                                checked={gender === 'Male'} 
                                onChange={e => SetGender(e.target.value)}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group">
                        <textarea class="form-control"
                            name="address"
                            value={address}
                            onChange={e => SetAddress(e.target.value)}
                            placeholder="Enter Address" />
                    </div>
                    <button type="submit" class="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
}
export default UpdateUser;