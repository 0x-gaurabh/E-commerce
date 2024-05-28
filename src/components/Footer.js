import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex flex-col md:flex-row items-center justify-around text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h5 className="text-2xl font-bold mb-4">About Us</h5>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
              We are a leading e-commerce company providing top quality products and services to our customers.
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h5 className="text-2xl font-bold mb-4">Contact Us</h5>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0">123 E-commerce St.<br/>Jorhat, Assam 12345</p>
            <p className="text-gray-400 mt-2">Email: support@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-2 text-center text-gray-400">
          <p>&copy; 2023 E-Commerce Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
