import { createContext, useContext, useState } from "react";

export type Product = {
  id: number;
  title: string;
  price: string;
  description?: string;
};

const initialProducts: Product[] = [
  {
    id: 1,
    title: "Laptop Pro 15",
    price: "$1499",
    description: "Powerful laptop",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: "$299",
    description: "Noise cancelling",
  },
];

const ProductContext = createContext<{
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
} | null>(null);

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct = {
      ...product,
      id: products.length + 1,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const ctx = useContext(ProductContext);
  if (!ctx)
    throw new Error("useProducts must be used within a ProductProvider");
  return ctx;
};
