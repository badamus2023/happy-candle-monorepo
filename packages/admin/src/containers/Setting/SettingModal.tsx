import Modal from "react-modal";
import Flex from "../../components/Common/Flex";
import styled from "styled-components";
import EditSettingFormModal from "./Forms/EditSettingFormModal";
import { useState } from "react";
import { SettingItem } from "../../types/types";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 25rem;
  overflow-y: auto;
`;

const StyledSettingItem = styled.li`
  width: 100%;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.darkPurple}80`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 0.25rem 0.25rem 0 0;
  transition: background-color 0.2s ease-in-out;

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 0.25rem 0.25rem;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple}cc;
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 500;
`;

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
    border: "2px solid #807cbf",
    borderRadius: "1rem",
    width: "90%",
    maxWidth: "30rem",
    padding: 0,
  },
};

interface SettingModalProps {
  isOpen?: boolean;
  onRequestClose?: () => void;
  settings?: SettingItem[];
  name: string;
}

const SettingModal: React.FC<SettingModalProps> = ({
  name,
  isOpen = false,
  settings,
  onRequestClose,
}) => {
  const [isEditSettingOpen, setEditSettingOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<SettingItem | null>(
    null
  );

  const handleEditSettingOpen = (setting: SettingItem) => {
    setSelectedSetting(setting);
    setEditSettingOpen(true);
  };

  const handleEditSettingClose = () => setEditSettingOpen(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={ModalStyles}
        onRequestClose={onRequestClose}
      >
        <StyledTitleContainer>
          <StyledTitle>{name} settings</StyledTitle>
        </StyledTitleContainer>
        <Flex flexDirection="column">
          <StyledUl>
            {settings?.map((setting) => (
              <StyledSettingItem
                key={setting.name}
                onClick={() => handleEditSettingOpen(setting)}
              >
                {setting.name}
                <span>{setting.value}</span>
              </StyledSettingItem>
            ))}
          </StyledUl>
        </Flex>
      </Modal>
      <EditSettingFormModal
        isOpen={isEditSettingOpen}
        onRequestClose={handleEditSettingClose}
        setting={selectedSetting}
      />
    </>
  );
};

export default SettingModal;
