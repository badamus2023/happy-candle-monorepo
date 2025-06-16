import React, { useState } from "react";
import TextField from "../../Common/Forms/TextField";
import Flex from "../../Common/Flex";
import TextArea from "../../Common/Forms/TextArea";
import StyledButton from "../../Common/Button";
import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from "@tanstack/react-form";
import Modal from "../../Common/Modal";
import { discountSchema } from "../Schemas/DiscountSchema";
import { getFirstError } from "../../../utils";
import Select from "../../Common/Forms/Select";

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextArea,
    Select,
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
  amount: number;
  currency: string;
  expiryDate: string;
  description: string;
  status?: "Active" | "Expired";
}

interface AddDiscountModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (discount: NewDiscount) => void;
}

const AddDiscountModal: React.FC<AddDiscountModalProps> = ({
  isOpen,
  onRequestClose,
  onSubmit,
}) => {
  const form = useAppForm({
    defaultValues: {
      code: "",
      type: "percentage",
      amount: 0,
      currency: "USD",
      expiryDate: "",
      description: "",
    },
    validators: {
      onChange: discountSchema,
    },
    onSubmit: ({ value }) => {
      onSubmit({
        ...value,
        type: value.type === "percentage" ? "percentage" : "fixed",
      });
      onRequestClose();
    },
  });

  const [type, setType] = useState<"percentage" | "fixed">("percentage");

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
      title="Add New Discount"
    >
      <Flex flexDirection="column" gap="1rem">
        <form onSubmit={handleSubmit}>
          <Flex flexDirection="column" gap="1rem">
            <form.AppField
              name="code"
              children={(field) => (
                <field.TextField
                  error={getFirstError(field)}
                  label="Code"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </Flex>

          <Flex flexDirection="column" gap="1rem">
            <form.AppField
              name="type"
              children={(field) => (
                <field.Select<"percentage" | "fixed">
                  label="Type"
                  values={["percentage", "fixed"]}
                  onChange={(e) => {
                    const v = e.target.value as NewDiscount["type"];
                    field.handleChange(v);
                    setType(v);
                  }}
                />
              )}
            />
          </Flex>

          <Flex flexDirection="column" gap="1rem">
            <form.AppField
              name="amount"
              children={(field) => (
                <field.TextField
                  error={getFirstError(field)}
                  label="Amount"
                  onChange={(e) => field.handleChange(parseInt(e.target.value))}
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
                    error={getFirstError(field)}
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
                  error={getFirstError(field)}
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
                  error={getFirstError(field)}
                  label="Description"
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </Flex>

          <Flex justifyContent="flex-end" gap="0.75rem" mt="1rem">
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
      </Flex>
    </Modal>
  );
};

export default AddDiscountModal;
