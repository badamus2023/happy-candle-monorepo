import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

if (typeof window !== "undefined") {
  ReactModal.setAppElement("#root");
}

export interface NewCategory {
  name: string;
  description: string;
  imageUrl: string;
}

interface AddCategoryModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (category: NewCategory) => void;
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

const TextArea = styled.textarea`
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
  border-radius: 4px;
  font-size: 0.95rem;
  resize: vertical;
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
  background-color: #7c3aed;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  &:hover {
    background-color: #6b21a8;
  }
`;

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setDescription("");
      setImageUrl("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, imageUrl });
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={ModalStyles}
      contentLabel="Add Category"
      shouldCloseOnOverlayClick={true}
    >
      <Title>Add New Category</Title>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="category-name">Name</Label>
          <Input
            id="category-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category-description">Description</Label>
          <TextArea
            id="category-description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="category-imageUrl">Image URL</Label>
          <Input
            id="category-imageUrl"
            type="text"
            placeholder="https://..."
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </FormGroup>

        <ButtonRow>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit">Add Category</SubmitButton>
        </ButtonRow>
      </Form>
    </ReactModal>
  );
};

export default AddCategoryModal;
