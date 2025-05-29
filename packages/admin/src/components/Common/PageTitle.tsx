import styled from "styled-components";

const PageTitleContainer = styled.div`
  display: flex;
  border: 1px solid #bf7ca911;
  background-color: #f0f0f087;
  height: 5rem;
  border-radius: 1rem;
  align-items: flex-start;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #807cbf;
`;

const PageTitle = ({ title }: { title: string }) => {
  return (
    <PageTitleContainer>
      <StyledTitle>{title}</StyledTitle>
    </PageTitleContainer>
  );
};

export default PageTitle;
