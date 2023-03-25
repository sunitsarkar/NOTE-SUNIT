import React, { useState } from "react";
import { useNavigate } from "react-router";
import './note.css';
import axios from "axios";



export default function Note() {

    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');

    const url = "https://noteback-mze8.onrender.com"

    const addNote = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(url + "/note", {
                "title": title,
                "description": des
            });
            console.log(res.data);
            alert('note added')
        } catch (error) {
            console.error(error);
        }
    }
    const navigate = useNavigate()

    return <div id="note">
        <div id="note-head">
            <span onClick={() => { navigate("/") }}>home</span>
            <span>Add Note</span>
            <span>delete all</span>
            <span>export</span>
        </div>
        <div>
            <h2>Title</h2>
            <input placeholder="Title" id="title" onChange={(e) => { setTitle(e.target.value) }} />
            <h2>description</h2>
            <input placeholder="what is on your mind?" id="des" onChange={(e) => { setDes(e.target.value) }} />
            <button onClick={addNote}>Add Note</button>
        </div>
        <div>

        </div>
    </div>
}