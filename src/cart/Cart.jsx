import React from 'react';
import { useCart } from '../hooks/useCart';

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, getTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
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
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded ml-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-right">
              <h3 className="text-xl font-bold text-gray-800">Total: &#8377;{getTotal()}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;