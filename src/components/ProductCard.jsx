import axios from "axios";

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/cart/add", { productId: product._id });
      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">${product.price}</p>
        <button className="btn btn-primary w-full" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
