import styled from "styled-components";
import Modal from "react-modal";
import Flex from "../../../components/Common/Flex";
import { SettingItem } from "../../../types/types";
import StyledButton from "../../../components/Common/Button";

type SettingFormModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  setting: SettingItem | null;
};

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple}cc;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 3px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 1rem;
  margin: 1rem;
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.purple};
    outline: none;
  }
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 500;
`;

const ModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    border: "2px solid #807cbf",
    borderRadius: "1rem",
    width: "90%",
    maxWidth: "30rem",
    padding: 0,
  },
};

const EditSettingFormModal: React.FC<SettingFormModalProps> = ({
  onRequestClose,
  isOpen,
  setting,
}) => {
  if (!setting) {
    return null;
  }

  const handleClose = () => {
    onRequestClose();
  };

  return (
    <Modal onRequestClose={onRequestClose} isOpen={isOpen} style={ModalStyles}>
      <Flex flexDirection="column">
        <StyledTitleContainer>
          <StyledTitle>Edit {setting.name}</StyledTitle>
        </StyledTitleContainer>
        <StyledInput placeholder="Test" value={setting.value}></StyledInput>
        <Flex padding="1rem" justifyContent="space-between" gap="0.5rem">
          <StyledButton bgc="#807cbf" onClick={handleClose}>
            Cancel
          </StyledButton>
          <StyledButton>Save</StyledButton>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default EditSettingFormModal;
