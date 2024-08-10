import Hero from "../components/Hero";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto p-4">
        <Products />
      </div>
    </div>
  );
};

export default Home;
