import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

if (typeof window !== "undefined") {
  ReactModal.setAppElement("#root");
}

export interface NewDiscount {
  code: string;
  type: "percentage" | "fixed";
  amount: string;
  currency: string;
  expiryDate: string;
  description: string;
}

interface AddDiscountModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (discount: NewDiscount) => void;
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

const Select = styled.select`
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
  background-color: #16a34a;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  &:hover {
    background-color: #15803d;
  }
`;

const AddDiscountModal: React.FC<AddDiscountModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const [code, setCode] = useState("");
  const [type, setType] = useState<"percentage" | "fixed">("percentage");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [expiryDate, setExpiryDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setCode("");
      setType("percentage");
      setAmount("");
      setCurrency("USD");
      setExpiryDate("");
      setDescription("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ code, type, amount, currency, expiryDate, description });
    onRequestClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={ModalStyles}
      contentLabel="Add Discount"
      shouldCloseOnOverlayClick={true}
    >
      <Title>Add New Discount</Title>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="discount-code">Code</Label>
          <Input
            id="discount-code"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="discount-type">Type</Label>
          <Select
            id="discount-type"
            value={type}
            onChange={(e) => setType(e.target.value as "percentage" | "fixed")}
          >
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed Amount</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="discount-amount">Amount</Label>
          <Input
            id="discount-amount"
            type="text"
            placeholder={type === "percentage" ? "e.g. 20" : "e.g. 10.00"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormGroup>

        {type === "fixed" && (
          <FormGroup>
            <Label htmlFor="discount-currency">Currency</Label>
            <Input
              id="discount-currency"
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
          </FormGroup>
        )}

        <FormGroup>
          <Label htmlFor="discount-expiry">Expiry Date</Label>
          <Input
            id="discount-expiry"
            type="text"
            placeholder="YYYY-MM-DD"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="discount-description">Description</Label>
          <TextArea
            id="discount-description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>

        <ButtonRow>
          <CancelButton type="button" onClick={onRequestClose}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit">Add Discount</SubmitButton>
        </ButtonRow>
      </Form>
    </ReactModal>
  );
};

export default AddDiscountModal;
