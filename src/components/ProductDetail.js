import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ProductDetail = ({product,cart,setcart}) => {
    const {id} =useParams()
    const [item, setitem] = useState({})
    const [relatedProduct, setrelatedProduct] = useState([])
    //  console.log(product);


    useEffect(() =>{
        const filterProduct=product.filter((product) =>product.id=== parseInt(id,10))
        //  console.log(filterProduct);
        setitem(filterProduct[0])

        const related=product.filter((gaurav) =>gaurav.category=== item.category)
        // console.log(related);
        setrelatedProduct(related)
        
    },[id,item.category])
    
    const add =(id,category,image,title,price,description ) =>{
      const obj ={
        id,category,image,title,price,description
      }
      setcart([...cart,{...obj,quantity :1}])

        toast.success('Item added to cart', {
          position: "top-center",
          autoClose: 1100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        
          });
        }
    //  console.log(item);
  return (
    <div>
   <div className="   py-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-4">
              <img
                src={item.image}
                alt="Product"
                className="rounded-lg  w-72 ml-7"
              />
            </div>
            <div className="md:w-1/2 md:ml-6 p-4">
              <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
              <p className="text-gray-600 mb-4">
              {item.description}
              </p>
              <p className="text-xl font-bold text-gray-800 mb-2">${item.price}</p>
              
              <button className='btn btn-primary mx-3  '>Buy Now</button>

                <button onClick={()=> add(item.id,item.category,item.image,item.title,item.price,item.description)} className='btn btn-warning'>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Product cart={cart} setcart={setcart}  product={relatedProduct} />
    </div>
  )
}

export default ProductDetail
