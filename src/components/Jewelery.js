import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Jewelery = ({product ,cart,setcart}) => {
    const [item, setItem] = useState([]);
    console.log(product);
  
    useEffect(() => {
      const filteredProducts = product.filter((product) => product.category=== "jewelery");
      setItem(filteredProducts);
    }, [product]);
    
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
  return (
    <div>
       <div className="container">
        <div className="row mt-10 ml-20">
          {item.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
              <div className="card p-2" style={{ width: '18rem' }}>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} className="h-60 w-64" alt="Product" />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary mx-3">{product.price} $</button>
                  <button onClick={()=> add(product.id,product.category,product.image,product.title,product.price,product.description)} className="btn btn-warning">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jewelery
