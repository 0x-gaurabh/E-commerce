import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Product = ({product,setcart,cart}) => {
    // console.log(product);

    const add =(id,category,image,title,price,description ) =>{
      const obj ={
        id,category,image,title,price,description,quantity:1
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
  return (
    <>
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {product.map((product) => (
          <div key={product.id} className="text-center">
            <div className="card p-4 h-full">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} className="h-60 w-60 mx-auto" alt="Product" />
              </Link>
              <div className="card-body">
                <h5 className="card-title mt-4 text-xl">{product.title}</h5>
                <p className="card-text mt-2 text-lg">{product.price} $</p>
                <div className="flex justify-center mt-4">
                  <button className="btn btn-primary mx-2">{product.price} $</button>
                  <button
                    onClick={() => add(product.id, product.category, product.image, product.title, product.price, product.description)}
                    className="btn btn-warning mx-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Product
