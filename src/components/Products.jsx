import React,{useState,useEffect} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
function Products() {
const [products,setProducts]=useState([])
const dataFetch=async()=>{
const response=await axios.get("https://fakestoreapi.com/products")
setProducts(response.data);
}

useEffect(()=>{
    dataFetch();
},[])

  return (
    <>
          <div className="d-flex flex-wrap justify-content-evenly gap-4 container">
      {
          products?.map((item)=>{
              return(
            <div class="card" style={{width: "18rem"}}>
  <Link to={`${item.id}`}><img src={item.image} class="card-img-top" alt="..."/></Link>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <Link to={`${item.id}`} class="btn btn-primary">Buy Now</Link>
  </div>
</div>
            )
        })
    }
    </div>
    </>
  )
}

export default Products
