import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: string;
  description?: string;
};

const mockProductDetails: Record<string, Product> = {
  "1": {
    id: 1,
    title: "Laptop Pro 15",
    price: "$1499",
    description: "Powerful laptop with retina display",
  },
  "2": {
    id: 2,
    title: "Wireless Headphones",
    price: "$299",
    description: "Noise cancelling over-ear headphones",
  },
};

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Simulate async data load
    setTimeout(() => {
      setProduct(mockProductDetails[id || ""]);
    }, 1000);
  }, [id]);

  if (!product) return <p data-testid="loading-product">Loading product...</p>;

  return (
    <div data-testid="product-page">
      <h1 data-testid="product-title">{product.title}</h1>
      <p data-testid="product-price">{product.price}</p>
      {product.description && (
        <p data-testid="product-description">{product.description}</p>
      )}

      <nav>
        <Link to="/" data-testid="nav-home">
          Home
        </Link>{" "}
        |{" "}
        <Link to="/products" data-testid="nav-products">
          Products
        </Link>
      </nav>
    </div>
  );
};

export default Product;
