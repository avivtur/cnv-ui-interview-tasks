import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div data-testid="home-page">
      <h1>Welcome to the Shop</h1>
      <p>This is a demo for UI QA E2E testing task.</p>
      <Link to="/products">
        <button data-testid="go-to-products">View Products</button>
      </Link>
    </div>
  );
};

export default Home;
