import { useParams, Link } from "react-router-dom";

const mockProducts: { [key: string]: { name: string; price: string } } = {
  "1": { name: "Laptop Pro 15", price: "$1,499" },
  "2": { name: "Wireless Headphones", price: "$299" },
};

const Product = () => {
  const { id } = useParams();
  const product = mockProducts[id || ""];

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1 data-testid="product-title">{product.name}</h1>
      <p data-testid="product-price">{product.price}</p>
      <Link to="/home" data-testid="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default Product;
