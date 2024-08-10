import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <br /> My E-Commerce
          </h1>
          <p className="mb-5">
            Discover the best products at unbeatable prices. Shop now and experience the best online shopping
            experience.
          </p>
          <button onClick={() => navigate("/products")} className="btn btn-primary">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
