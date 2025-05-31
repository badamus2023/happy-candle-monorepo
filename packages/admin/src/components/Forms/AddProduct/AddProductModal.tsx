import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

export interface NewProduct {
  title: string;
  price: string;
  imageUrl: string;
  inStock: string;
  category: string;
  sku: string;
}

interface AddProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (product: NewProduct) => void;
}

const ModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    borderRadius: "1rem",
    width: "90%",
    maxWidth: "30rem",
  },
};

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #2c2c2c;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #5a5a75;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
  border-radius: 4px;
  font-size: 0.95rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const CancelButton = styled.button`
  background: #e5e7eb;
  color: #374151;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  &:hover {
    background: #d1d5db;
  }
`;

const SubmitButton = styled.button`
  background-color: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  &:hover {
    background-color: #4338ca;
  }
`;

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [inStock, setInStock] = useState("");
  const [category, setCategory] = useState("");
  const [sku, setSku] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setPrice("");
      setImageUrl("");
      setInStock("");
      setCategory("");
      setSku("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, price, imageUrl, inStock, category, sku });
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={ModalStyles}
      contentLabel="Add Product"
      shouldCloseOnOverlayClick={true}
    >
      <Title>Add New Product</Title>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="product-title">Product Title</Label>
          <Input
            id="product-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-price">Price</Label>
          <Input
            id="product-price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-imageUrl">Image URL</Label>
          <Input
            id="product-imageUrl"
            type="text"
            placeholder="https://..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-inStock">In-Stock Quantity</Label>
          <Input
            id="product-inStock"
            type="text"
            value={inStock}
            onChange={(e) => setInStock(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-category">Category</Label>
          <Input
            id="product-category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-sku">SKU</Label>
          <Input
            id="product-sku"
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </FormGroup>

        <ButtonRow>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit">Add Product</SubmitButton>
        </ButtonRow>
      </Form>
    </ReactModal>
  );
};

export default AddProductModal;
