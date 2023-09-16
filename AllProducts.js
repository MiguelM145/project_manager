import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts = (props) =>{
    const {removeFromDom, productList, setProductList} = props; 
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/delete/${productId}`)
        .then(res => {
            removeFromDom(productId);
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/all")
        .then((res) => {
            setProductList(res.data); 
        })
        .catch((err) => console.log(err))
    });

    return(
        <div>
            <h1>All Products: </h1>
            {
                productList.map((product, index) =>(
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts; 