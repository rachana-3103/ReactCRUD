import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
    let history = useHistory();
    const [gender, SetGender] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: '',
        age: '',
        mobile: '',
        address: '',
        gender: ''
    });

    const changeGender = async e => {
        const { value } = e.target;
        SetGender(value);
    };
    const { username, password, age, mobile, address} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value , gender });
    };
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:8081/api/users", user);
        history.push('/home');
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <h4>Add User</h4>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group">
                        <input type="text"
                            class="form-control"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                            placeholder="Enter Username" />
                    </div>
                    <div class="form-group">
                        <input type="password"
                            class="form-control"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                            placeholder="Enter Password" />
                    </div>
                    <div class="form-group">
                        <input type="number"
                            class="form-control"
                            name="age"
                            value={age}
                            onChange={e => onInputChange(e)}
                            placeholder="Enter Age" />
                    </div>
                    <div class="form-group">
                        <input type="number"
                            class="form-control"
                            name="mobile"
                            value={mobile}
                            onChange={e => onInputChange(e)}
                            placeholder="Enter Mobile" />
                    </div>
                    <div>
                        Gender:- &nbsp;
                        <div class="form-check form-check-inline">
                            Female &nbsp;
                            <input
                                class="form-check-input"
                                type="radio"
                                name='gender'
                                value='Female'
                                onChange={e => changeGender(e)}
                            />
                        </div>

                        <div class="form-check form-check-inline">
                            Male &nbsp;
                            <input
                                class="form-check-input"
                                type="radio"
                                name='gender'
                                value='Male'
                                onChange={e => changeGender(e)}
                            />
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group">
                        <textarea class="form-control"
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)}
                            placeholder="Enter Address" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddUser;