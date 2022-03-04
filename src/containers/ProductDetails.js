import React, {useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts } from '../redux/actions/productActions';


const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const {image,title,price,category,description} = product
    const {productId} = useParams();
    console.log(product)
    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err, 'err')
        });

        dispatch(selectedProducts(response.data))
    }

    useEffect(() => {
        if(productId && productId !== '') fetchProductDetail();
    }, [productId])


  return (
    <div>
        <h1>Product Details</h1>
        {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ) : (
            <div>
                <div><img src={image} alt="" /></div>
                <div> $ {price}</div>
                <div>{category}</div>
                <div>{description}</div>
            </div>
        )
        }
    </div>
  )
}

export default ProductDetails