import React from "react";
import Modal from "../../Common/Modal";
import Flex from "../../Common/Flex";
import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from "@tanstack/react-form";
import TextField from "../../Common/Forms/TextField";
import TextArea from "../../Common/Forms/TextArea";
import StyledButton from "../../Common/Button";
import { getFirstError } from "../../../utils";
import { productSchema } from "../Schemas/ProductSchema";

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
    validators: {
      onChange: productSchema,
    },
    onSubmit: ({ value }) => {
      onSubmit(value);
      onRequestClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
    onRequestClose();
  };

  const canSubmit = useStore(form.store, (s) => s.canSubmit && s.isDirty);

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
                error={getFirstError(field)}
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
                error={getFirstError(field)}
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
                error={getFirstError(field)}
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
                error={getFirstError(field)}
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
                error={getFirstError(field)}
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
                error={getFirstError(field)}
                label="SKU"
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </Flex>

        <Flex justifyContent="flex-end" gap="1rem" mt="1rem">
          <form.AppForm>
            <form.StyledButton type="submit" disabled={!canSubmit}>
              Save
            </form.StyledButton>
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
