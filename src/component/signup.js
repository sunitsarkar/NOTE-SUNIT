import React, { useState } from "react";
import './signup.css'
import axios from "axios";
import { useNavigate } from "react-router";

export default function Signup() {

    const navigate=useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const url = "https://noteback-mze8.onrender.com"

    const signup = async (e) => {
        if (password === cpassword) {
            console.log(email, password)
            e.preventDefault()
            try {
                const res = await axios.post(url + "/signup", {
                    "email": email,
                    "password": password
                });

                navigate("/")
                console.log(res.data);
            } catch (error) {
                console.error(error);
                alert("Invalid Credientials")
            }
        }
    }

    return <div id="main1">
        <div id="signup">
            <br />
            <h1>SIGN UP</h1>
            <br /><br /><br />
            <input placeholder="EMAIL" className="input" onChange={(e) => { setEmail(e.target.value) }} />
            <input placeholder="PASSWORD" className="input" onChange={(e) => { setPassword(e.target.value) }} />
            <input placeholder="REPEAT PASSWORD" className="input" onChange={(e) => { setCpassword(e.target.value) }} />
            <br></br><br />
            <div id="terms"><input type={"checkbox"} /><span>i agree with <u>TERMS & CONDITION</u>  </span></div>
            <br></br><br />
            <button onClick={signup}>CONTINUE</button>

        </div>

    </div>
}