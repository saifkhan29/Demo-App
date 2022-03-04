import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';


const ProductListing = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state);
    console.log(products)
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("err",err)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts();

    },[])
    console.log(products)
  return (
    <div>
        <h1>Product Listing</h1>
        <ProductComponent/>
        
    </div>
  )
}

export default ProductListing