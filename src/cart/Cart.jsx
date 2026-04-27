import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import OrderLoader from './OrderLoader';

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, getTotal,  } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyClick = () => {
    // Only proceed if there are items in cart
    if (cartItems.length === 0) {
      return;
    }
    
    // Show loading animation
    setIsLoading(true);
    // Clear all items from cart
    cartItems.forEach((item) => removeFromCart(item.id));
    
    // After 2 seconds, hide loader and show success message
    setTimeout(() => {
      setIsLoading(false);
      setOrderPlaced(true);
      // Hide success message after 3 seconds
      setTimeout(() => setOrderPlaced(false), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-gray-100 py-15">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#0000002e] backdrop-blur-xs ">
          <OrderLoader />
        </div>
      )}
      {orderPlaced && (
        <div className="fixed  inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 text-center max-w-md">
            <div className="text-5xl mb-4">👍</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Your order is placed</h2>
            <p className="text-gray-600">Thank you for your purchase!</p>
          </div>
        </div>
      )}
      <div className='h-15 w-full absolute top-0 bg-[#ec3c0bde]'></div>
        <h3 className='text-[1.3rem] text-[#1a1d29] font-medium py-2 pl-4 border-b-2 border-b-[#bbb6b6] '>My Cart</h3>
        <div className='min-h-[35vw] w-full flex items-center justify-around  pb-4 '>
          {/* CART START HERE  */}
          <div className="w-[50vw]  bg-white rounded shadow-md mt-3 p-6">
        <h1 className="text-xl font-semibold text-[#1a1d29] border-b-2 border-b-[#d3d0d0] pb-2 mb-6">Shopping Cart({cartItems.length})</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-b-[#b5b5b5] pb-4 ">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-600">&#8377;{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2  rounded"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2  rounded"
                    >
                      +
                    </button>
                    <h2>&#8377;{item.price * item.quantity}</h2>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-4 active:scale-90"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
           
          </>
        )}
      </div>
      <div id='buyDiv' className='w-[25vw]  bg-white rounded-lg shadow-md mt-5 p-6 '> 
              <h3 className="text-xl font-bold text-gray-800">Total: &#8377;{getTotal()}</h3>
              <button 
                onClick={handleBuyClick}
                className="w-full bg-[#ec3c0b] hover:bg-[#d83509] text-white font-semibold py-2 rounded-lg mt-4 active:scale-95 transition"
              >
                Buy Now
              </button>
      </div>
        </div>
    </div>
  );
}

export default Cart;