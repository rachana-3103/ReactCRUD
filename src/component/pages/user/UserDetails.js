import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [username, SetUsername] = useState("");
    const [age, SetAge] = useState("");
    const [mobile, SetMobile] = useState("");
    const [address, SetAddress] = useState("");
    const [gender, SetGender] = useState("");
    useEffect(() => {
        loadUsers();
    })
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:8081/api/users/${id}`);
        SetUsername(result.data.username);
        SetAge(result.data.age);
        SetGender(result.data.gender);
        SetMobile(result.data.mobile);
        SetAddress(result.data.address);
    }
    return (
      <div className="container">
          <br/>
          <Link className="btn btn-outline-success my-2 my-sm-0" to='/home'>
              Back to Home
          </Link>
          <hr/>
          <ul className='list-group w-50'>
              <li className='list-group-item'><b>Username:</b> {username}</li>
              <li className='list-group-item'><b>Age:</b> {age}</li>
              <li className='list-group-item'><b>Mobile:</b> {mobile}</li>
              <li className='list-group-item'><b>Gender:</b> {gender}</li>
              <li className='list-group-item'><b>Address:</b> {address}</li>
          </ul>
      </div>  
    )
}
export default UserDetails;