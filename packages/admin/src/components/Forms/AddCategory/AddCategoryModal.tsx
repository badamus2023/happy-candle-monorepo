import React, { useEffect } from "react";
import StyledButton from "../../Common/Button";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import TextField from "../../Common/TextField";
import TextArea from "../../Common/TextArea";
import { z } from "zod";
import Flex from "../../Common/Flex";
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

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const form = useAppForm({
    defaultValues: {
      name: "",
      description: "",
      imageUrl: "",
    },
    validators: {
      onChange: z.object({
        name: z.string().min(1, "Name is required"),
        description: z.string(),
        imageUrl: z.string(),
      }),
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
      onRequestClose();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.handleSubmit();
    onRequestClose();
  };

  useEffect(() => {
    if (isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      title={"Add New Category"}
    >
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="column" gap="1rem">
          <Flex flexDirection="column">
            <form.AppField
              name="name"
              children={(field) => (
                <field.TextField
                  label="Name"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </Flex>
          <Flex flexDirection="column">
            <form.AppField
              name="description"
              children={(field) => (
                <field.TextArea
                  label="Description"
                  rows={4}
                  placeholder="Enter category description"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </Flex>
          <Flex flexDirection="column">
            <form.AppField
              name="imageUrl"
              children={(field) => (
                <field.TextField
                  label="Image URL"
                  placeholder="Enter image URL"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </Flex>
          <Flex justifyContent="flex-end" gap="0.75rem" mt>
            <form.AppForm>
              <form.StyledButton type="submit">Save</form.StyledButton>
              <form.StyledButton type="reset" onClick={onRequestClose}>
                Cancel
              </form.StyledButton>
            </form.AppForm>
          </Flex>
        </Flex>
      </form>
    </Modal>
  );
};

export default AddCategoryModal;
