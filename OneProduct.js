import React, {useEffect, useState} from 'react';
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from 'axios';


const OneProduct = (props) =>{
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});

    const navigate = useNavigate();

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/delete/${productId}`)
        .then(res => {
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch(err => console.log(err));

    }, [id])

    return(
        <div>
            <h2>{oneProduct.title}</h2>
            <p>Price: {oneProduct.price}</p>
            <p>Description: {oneProduct.desc}</p>

            <Link to={`/edit/${id}`}>Edit </Link>
            <button onClick={(e) => {deleteProduct(id);}}>Delete</button>
        </div>
    )
}

export default OneProduct; 