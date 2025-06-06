import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "../../Common/TextField";
import Flex from "../../Common/Flex";
import TextArea from "../../Common/TextArea";
import StyledButton from "../../Common/Button";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import Modal from "../../Common/Modal";

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextArea,
  },
  formComponents: {
    StyledButton,
  },
  fieldContext,
  formContext,
});

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

const Select = styled.select`
  padding: 0.6rem 0.75rem;
  border: 1px solid #d9d9e1;
  border-radius: 4px;
  font-size: 0.95rem;
`;

const AddDiscountModal: React.FC<AddDiscountModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const form = useAppForm({
    defaultValues: {
      code: "",
      type: "percentage",
      amount: "",
      currency: "USD",
      expiryDate: "",
      description: "",
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
      onRequestClose();
    },
  });

  const [type, setType] = useState<"percentage" | "fixed">("percentage");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="Add New Discount"
    >
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="code"
            children={(field) => (
              <field.TextField
                label="Code"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          {/* <Label htmlFor="discount-type">Type</Label> */}
          <Select
            id="discount-type"
            value={type}
            onChange={(e) => setType(e.target.value as "percentage" | "fixed")}
          >
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed Amount</option>
          </Select>
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="amount"
            children={(field) => (
              <field.TextField
                label="Amount"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        {type === "fixed" && (
          <Flex flexDirection="column" gap="1rem">
            <form.AppField
              name="currency"
              children={(field) => (
                <field.TextField
                  label="Currency"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </Flex>
        )}

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="expiryDate"
            children={(field) => (
              <field.TextField
                label="Expiry Date"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="description"
            children={(field) => (
              <field.TextField
                label="Description"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex justifyContent="flex-end" gap="0.75rem" mt="1rem">
          <form.AppForm>
            <form.StyledButton type="submit">Save</form.StyledButton>
            <form.StyledButton type="reset" onClick={onRequestClose}>
              Cancel
            </form.StyledButton>
          </form.AppForm>
        </Flex>
      </form>
    </Modal>
  );
};

export default AddDiscountModal;
