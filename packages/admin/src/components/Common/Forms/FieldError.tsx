import styled from "styled-components";

const ErrorText = styled.div`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: #e74c3c;
`;

interface FieldErrorProps {
  error: string;
}

const FieldError: React.FC<FieldErrorProps> = ({
  error,
}: {
  error: string;
}) => {
  return <ErrorText>{error}</ErrorText>;
};

export default FieldError;
