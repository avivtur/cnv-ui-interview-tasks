import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = { id: number; title: string };

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated async fetch (or use fetch('https://dummyjson.com/products') for real data)
    setTimeout(() => {
      setProducts([
        { id: 1, title: "Laptop Pro 15" },
        { id: 2, title: "Wireless Headphones" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div data-testid="products-page">
      <h1>Product List</h1>

      <Link to="/" data-testid="back-to-home">
        ← Back to Home
      </Link>

      {loading ? (
        <p data-testid="loading">Loading...</p>
      ) : (
        <ul data-testid="product-list">
          {products.map((product) => (
            <li key={product.id} data-testid={`product-${product.id}`}>
              <Link
                to={`/product/${product.id}`}
                data-testid={`link-${product.id}`}
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
