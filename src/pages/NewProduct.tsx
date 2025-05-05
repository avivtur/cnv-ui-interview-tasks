import {
  PageSection,
  Title,
  Form,
  FormGroup,
  TextInput,
  TextArea,
  Button,
} from "@patternfly/react-core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ title, price, description });
    navigate("/products");
  };

  return (
    <PageSection data-testid="new-product-page">
      <Title headingLevel="h1">Add New Product</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup label="Product Name" fieldId="product-title">
          <TextInput
            id="product-title"
            value={title}
            onChange={(_evt, val) => setTitle(val)}
            data-testid="input-title"
          />
        </FormGroup>
        <FormGroup label="Price" fieldId="product-price">
          <TextInput
            id="product-price"
            value={price}
            onChange={(_evt, val) => setPrice(val)}
            data-testid="input-price"
          />
        </FormGroup>
        <FormGroup label="Description" fieldId="product-description">
          <TextArea
            id="product-description"
            value={description}
            onChange={(_evt, val) => setDescription(val)}
            data-testid="input-description"
          />
        </FormGroup>
        <Button type="submit" data-testid="submit-product">
          Submit
        </Button>
      </Form>
    </PageSection>
  );
};

export default NewProduct;
