import { useEffect, useState } from "react";
import {
  PageSection,
  Title,
  Spinner,
  List,
  ListItem,
  Button,
  Flex,
  FlexItem,
} from "@patternfly/react-core";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const Products = () => {
  const { products } = useProducts();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <PageSection data-testid="products-page">
      <Flex
        justifyContent={{ default: "justifyContentSpaceBetween" }}
        alignItems={{ default: "alignItemsCenter" }}
      >
        <Title headingLevel="h1">Product List</Title>
        <FlexItem>
          <Link to="/products/new">
            <Button data-testid="add-product-button" variant="primary">
              Add Product
            </Button>
          </Link>
        </FlexItem>
      </Flex>

      {loading ? (
        <Spinner data-testid="loading" />
      ) : (
        <List data-testid="product-list">
          {products.map((product) => (
            <ListItem key={product.id} data-testid={`product-${product.id}`}>
              <Link
                to={`/products/${product.id}`}
                data-testid={`link-${product.id}`}
              >
                {product.title}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </PageSection>
  );
};

export default Products;
