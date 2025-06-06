import React from "react";
import Modal from "../../Common/Modal";
import Flex from "../../Common/Flex";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import TextField from "../../Common/TextField";
import TextArea from "../../Common/TextArea";
import StyledButton from "../../Common/Button";

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

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const form = useAppForm({
    defaultValues: {
      title: "",
      price: "",
      imageUrl: "",
      inStock: "",
      category: "",
      sku: "",
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
      onRequestClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title="Add New Product"
    >
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="title"
            children={(field) => (
              <field.TextField
                label="Title"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="price"
            children={(field) => (
              <field.TextField
                label="Price"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="imageUrl"
            children={(field) => (
              <field.TextField
                label="Image URL"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="inStock"
            children={(field) => (
              <field.TextField
                label="In Stock"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="category"
            children={(field) => (
              <field.TextField
                label="Category"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex flexDirection="column" gap="1rem">
          <form.AppField
            name="sku"
            children={(field) => (
              <field.TextField
                label="SKU"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex justifyContent="flex-end" gap="1rem" mt="1rem">
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

export default AddProductModal;
