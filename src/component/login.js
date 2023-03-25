import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Login(){

    const navigate=useNavigate()

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const url="https://noteback-mze8.onrender.com"

    const signin= async (e)=>{
        e.preventDefault()
            try {
                const res = await axios.post(url + "/", {
                    "email": email,
                    "password": password
                });
                console.log(res)
                navigate("/note")
                console.log(res.data);
            } catch (error) {
                console.error(error);
                alert("Invalid Credientials")
            }
    }
    return <div id='main'>

        <div id='login'>
            <h1>Sign In</h1>
            <h3>Email address</h3>
            <input placeholder='Enter email' className='input1' onChange={(e)=>{setEmail(e.target.value)}}/>
            <h3>password</h3>
            <input placeholder='Enter password' className='input1' onChange={(e)=>{setPassword(e.target.value)}}/>
            <br></br>
            <input type={'checkbox'} id='check'/><span>Rember me</span>
            <br/><br/>
            <button  id='btn' onClick={signin}>Submit</button>
            <footer>forgot <a href='#'>password?</a></footer>
            <br/><br/>
            <button onClick={()=>{navigate('/signup')}}>signup</button>
        </div>

    </div>
}