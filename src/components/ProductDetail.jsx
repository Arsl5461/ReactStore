import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function ProductDetail() {
    const [product,setproduct]=useState(null)
    const {id}=useParams();
const getProduct=async()=>{
const response =await axios.get(`https://fakestoreapi.com/products/${id}`)
setproduct(response.data)

}
useEffect(()=>{
getProduct();
},[])

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={product?.image} className='w-75 h-75'/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column gap-3">
                <h1>{product?.title}</h1>
                <p>{product?.description}</p>
                <b>{product?.category.toUpperCase()}</b>
                <h5>Stock Available:{product?.rating?.count}</h5>
                <ReactStars
    count={product?.rating?.rate}
    size={30}
    activeColor="yellow"
  />
  <h1><b>${product?.price}</b></h1>
  <button className='btn btn-primary w-50'>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
