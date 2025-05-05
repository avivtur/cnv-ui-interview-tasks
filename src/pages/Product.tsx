import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageSection, Title, Spinner } from "@patternfly/react-core";
import { useProducts } from "../context/ProductContext";
import { Product as ProductType } from "../context/ProductContext";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const [product, setProduct] = useState<ProductType | null | undefined>(
    undefined
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const found = products.find((p) => p.id === Number(id));
      setProduct(found || null);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [id, products]);

  if (product === undefined) {
    return <Spinner data-testid="loading-product" />;
  }

  if (product === null) {
    return (
      <PageSection data-testid="product-not-found">
        <Title headingLevel="h1">Product not found</Title>
      </PageSection>
    );
  }

  return (
    <PageSection data-testid="product-page">
      <Title headingLevel="h1" data-testid="product-title">
        {product.title}
      </Title>
      <p data-testid="product-price">{product.price}</p>
      {product.description && (
        <p data-testid="product-description">{product.description}</p>
      )}
    </PageSection>
  );
};

export default Product;
