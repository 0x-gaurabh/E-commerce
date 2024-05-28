import React from 'react'

const Cart = ({cart,setcart}) => {
    // console.log(cart);
    const removeTodo = (index) => {
      const newcarts = [...cart];
      newcarts.splice(index, 1);
      setcart(newcarts);
    };
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleplus =(id) =>{
      setcart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    }

    const handleminus =(id) =>{
      setcart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
    }
  return (
    <>
      {cart.length === 0 ? (
        <div className="text-center h-[700px] py-10">
          <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
          <p className="text-gray-600 mt-4">Add items to your cart to see them here.</p>
        </div>
      ) : (
        <div className="w-full md:w-3/5 m-auto h-[1000px] overflow-auto">
          <h1 className="text-3xl font-bold text-center mb-6">My Cart</h1>
          {cart.map((item, index) => (
            <div key={item.id} className="cart_box flex flex-col md:flex-row justify-between items-center mt-5 border-2 bg-transparent p-4 rounded-lg shadow-lg">
              <div className="cart_img flex flex-col md:flex-row items-center w-full md:w-[400px]">
                <img className="w-[150px] h-[150px] p-2 rounded-lg" src={item.image} alt="image not found" />
                <div className="ml-4 text-center md:text-left">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <button onClick={() => handleminus(item.id)} className="px-3 font-bold bg-gray-200 hover:bg-gray-300 transition duration-300">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleplus(item.id)} className="px-3 font-bold bg-gray-200 hover:bg-gray-300 transition duration-300">+</button>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <span className="bg-green-400 px-2 py-1 mr-4">${(item.price * item.quantity).toFixed(2)}</span>
                <button  onClick={() => removeTodo(index)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Remove</button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6 mb-10">
            <span className="font-bold text-xl">Total Price of your cart: </span>
            <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
            <a href="https://buy.stripe.com/test_3csdTN4cp8w5aoE4gi" className="inline-block ml-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      )}
  </>
  );
}

export default Cart
