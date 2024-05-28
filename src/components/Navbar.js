import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { BsCartCheck } from "react-icons/bs";

const Navbar = ({cart}) => {
  const [search, setSearch] = useState("")
  const navigate=useNavigate()

   const handleSubmit =(e) =>{
    e.preventDefault()
    navigate(`/search/${search}`)
    setSearch("")
    
   }
  return (
    <div>
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center py-4">
          {/* Website Logo */}
          <div className="flex items-center">
            <Link to={'/'}>
              <span className="font-semibold text-white text-2xl">NextGenStore</span>
            </Link>
          </div>
          
          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="flex items-center space-x-3 mt-3 w-full md:w-auto">
            <input
              type="text"
              className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 flex-grow md:flex-grow-0"
              placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="text-white hover:text-gray-200 transition duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          
          {/* Secondary Navbar items */}
          <div className="flex items-center space-x-3 mt-3 md:mt-0">
            <Link to={'/cart'}>
              <button type="button" className="btn btn-primary relative">
                <BsCartCheck className="h-10 w-10" />
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                  {cart.length}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    {/* <header className="bg-gray-900 text-white py-4"> */}
      {/* <div className="container mx-auto  flex justify-around items-center"> */}
        {/*  */}
        {/* <nav> */}
          {/* <ul className="flex space-x-20"> */}
            {/* <li> */}
              {/* <p className="hover:text-gray-300"> */}
                {/* <Link to={'/'}> */}
                {/* All Products */}
                {/* </Link> */}
              {/* </p> */}
            {/* </li> */}
            {/* <li> */}
              {/* <p href="#" className="hover:text-gray-300"> */}
                {/* <Link to={"/men"}> */}
                {/* Men */}
                {/* </Link> */}
              {/* </p> */}
            {/* </li> */}
            {/* <li> */}
              {/* <p href="#" className="hover:text-gray-300"> */}
                {/* <Link to={'/women'}> */}
                {/* Women */}
                {/* </Link> */}
              {/* </p> */}
            {/* </li> */}
            {/* <li> */}
              {/* <p href="#" className="hover:text-gray-300"> */}
                {/* <Link to={'/electronic'}> */}
                {/* Electronics */}
                {/* </Link> */}
              {/* </p> */}
            {/* </li> */}
            {/* <li> */}
              {/* <p href="#" className="hover:text-gray-300"> */}
                {/* <Link to={'/jewelery'}> */}
                {/* Jewllery */}
                {/* </Link> */}
              {/* </p> */}
            {/* </li> */}
          {/* </ul> */}
        {/* </nav> */}
      {/* </div> */}
    {/* </header> */}
    </div>
  )
}

export default Navbar
