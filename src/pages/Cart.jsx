import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/v1/cart");
        setCart(data.items);
      } catch (error) {
        console.error("Error fetching cart items:", error.message);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async itemId => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/cart/${itemId}`);
      setCart(cart.filter(item => item._id !== itemId));
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
    }
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Cart is empty</h1>
      </div>
    );
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.productId.price, 0).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cart.map(item => (
          <div key={item._id} className="card w-full bg-base-100 shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="card-title text-2xl mb-2">{item.productId.name}</h2>
              <p className="text-gray-600 text-lg">${item.productId.price}</p>
              <p className="text-gray-600 text-sm mt-2">{item.productId.description}</p>
            </div>
            <div className="card-actions mt-4">
              <button className="btn btn-outline btn-primary w-full" onClick={() => handleRemoveItem(item._id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <p className="text-2xl font-semibold">Total: ${totalPrice}</p>
        <button className="btn btn-primary btn-lg mt-4">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
