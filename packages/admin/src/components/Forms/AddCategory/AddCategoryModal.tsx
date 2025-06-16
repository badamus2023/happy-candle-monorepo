import React, { useEffect } from "react";
import StyledButton from "../../Common/Button";
import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from "@tanstack/react-form";
import TextField from "../../Common/Forms/TextField";
import TextArea from "../../Common/Forms/TextArea";
import Flex from "../../Common/Flex";
import Modal from "../../Common/Modal";
import { categorySchema } from "../Schemas/CategorySchema";
import { getFirstError } from "../../../utils";

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
      onChange: categorySchema,
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

  useEffect(() => {
    if (isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  const canSubmit = useStore(form.store, (s) => s.canSubmit && s.isDirty);

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
                  error={getFirstError(field)}
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
                  error={getFirstError(field)}
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
                  error={getFirstError(field)}
                  placeholder="Enter image URL"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </Flex>
          <Flex justifyContent="flex-end" gap="0.75rem" mt>
            <form.AppForm>
              <form.StyledButton disabled={!canSubmit} type="submit">
                Save
              </form.StyledButton>
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
