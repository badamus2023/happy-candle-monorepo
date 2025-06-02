import Modal from "react-modal";
import Flex from "../../components/Common/Flex";
import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.25rem 1rem;
  background-color: ${({ theme }) => theme.colors.darkPurple};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple}cc;
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
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
  name: string;
}

const dummySettings = [
  { id: 1, name: "Name", value: "Sweet Candle" },
  { id: 2, name: "In Stock", value: 20 },
  { id: 3, name: "Price", value: "$15.99" },
  { id: 4, name: "Description", value: "A lovely scented candle." },
  { id: 5, name: "Category", value: "Home Decor" },
  { id: 6, name: "SKU", value: "CNDL-12345" },
  { id: 7, name: "Identifier (ID)", value: "12345" },
  { id: 8, name: "Image", value: "https://example.com/image.jpg" },
];

const SettingModal: React.FC<SettingModalProps> = ({
  name,
  isOpen = false,
  onRequestClose,
}) => {
  return (
    <Modal isOpen={isOpen} style={ModalStyles} onRequestClose={onRequestClose}>
      <StyledTitleContainer>
        <StyledTitle>{name} Settings</StyledTitle>
      </StyledTitleContainer>

      <Flex flexDirection="column" gap="0">
        <StyledUl>
          {dummySettings.map((setting) => (
            <StyledSettingItem
              key={setting.id}
              onClick={() => alert(`Clicked on ${setting.name}`)}
            >
              {setting.name}
              <span>{setting.value}</span>
            </StyledSettingItem>
          ))}
        </StyledUl>
      </Flex>
    </Modal>
  );
};

export default SettingModal;
