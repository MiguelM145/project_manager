import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,    
            price,
            desc      
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDesc(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default ProductForm;

