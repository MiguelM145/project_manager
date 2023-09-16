import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const UpdateForm = () => {
    const {id} = useParams(); 
    const navigate = useNavigate(); 
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState("");
    //handler when the form is submitted

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDesc(res.data.desc);
        })
    },[id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/edit/${id}`, {
            title,    
            price,
            desc      
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                navigate('/')
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={updateProduct}>
            <h1>Update Form</h1>
            <p>
                <label>Title</label><br/>
                <input value={title} type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input value={price} type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input value={desc} type="text" onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default UpdateForm;

