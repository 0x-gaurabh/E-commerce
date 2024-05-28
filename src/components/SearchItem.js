import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'

const SearchItem = ({product ,cart, setcart}) => {
    const [filterproduct, setfilterproduct] = useState([])

    const {term} =useParams()
    //  console.log(product);
        useEffect(()=>{
            const filterProduct =product.filter((product) => product.title.toLowerCase().includes(term.toLocaleLowerCase()))
            // console.log(filterProduct[0]);
            setfilterproduct(filterProduct)
            // console.log(filterProduct);

        },[term])

       
  return (
    <div>
      <Product cart={cart} setcart={setcart} product={filterproduct} />
    </div>
  )
}

export default SearchItem
