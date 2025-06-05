import styled from "styled-components";
import ReactModal from "react-modal";

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #2c2c2c;
`;

interface ModalProps {
  isOpen: boolean;
  title: string;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, title, ...props }) => {
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

  return (
    <ReactModal {...props} style={ModalStyles}>
      <Title>{title}</Title>
      {children}
    </ReactModal>
  );
};

export default Modal;
