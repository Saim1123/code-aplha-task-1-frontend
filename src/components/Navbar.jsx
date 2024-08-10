import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-200 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            E-Commerce
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/products" className="btn btn-ghost">
            Products
          </Link>
          <Link to="/cart" className="btn btn-ghost">
            Cart
          </Link>
          <Link to="/add-product" className="btn btn-ghost">
            Add Product
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-base-200 p-4">
          <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/products" className="block py-2" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/cart" className="block py-2" onClick={() => setIsOpen(false)}>
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
