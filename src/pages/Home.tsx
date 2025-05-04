import { Link } from "react-router-dom";

const mockProducts = [
  { id: "1", name: "Laptop Pro 15", price: "$1,499" },
  { id: "2", name: "Wireless Headphones", price: "$299" },
];

const Home = () => {
  return (
    <div data-testid="product-list">
      <h1>Products</h1>
      {mockProducts.map((product) => (
        <div key={product.id} data-testid="product-card">
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <Link
            to={`/product/${product.id}`}
            data-testid={`link-${product.id}`}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
