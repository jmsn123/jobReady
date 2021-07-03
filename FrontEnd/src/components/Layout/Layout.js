import React from "react";
import styled from "styled-components";
const Container = styled.div``;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ centerAlign }) => (centerAlign ? "center" : "flex-start")};
  justify-content: ${({ centerJustify }) =>
    centerJustify ? "center" : "flex-start"};
`;
const Input = styled.input`
  font-size: 1.5rem;
`;
const Label = styled.label`
  margin-bottom: 1rem;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;
const ButtonContainer = styled.button`
  border: none;
  background-color: ${({ disabled }) => (disabled ? "gray" : "red")};
  padding: 0.5rem;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "300px")};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
const Layout = ({ children, className }) => (
  <Container className={className}>
    <Flex>{children}</Flex>
  </Container>
);

const Column = ({ children, className, centerAlign, centerJustify }) => (
  <PageContainer
    className={className}
    centerAlign={centerAlign}
    centerJustify={centerJustify}
  >
    {children}
  </PageContainer>
);

const Page = () => (
  <Layout>
    <Column>// child components</Column>
    <Column>// child components</Column>
  </Layout>
);

const TextInput = ({ className, label, onChange, value }) => (
  <InputContainer className={className}>
    {label && <Label>{label}</Label>}
    <Input type="text" onChange={onChange} value={value} name={label} />
  </InputContainer>
);

const Button = ({ children, className, onClick, disabled }) => (
  <ButtonContainer className={className} onClick={onClick} disabled={disabled}>
    {children}
  </ButtonContainer>
);
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ FullWidth }) => (FullWidth ? "1fr" : "1fr 1fr")};
  align-items: center;
  grid-gap: 20px;

  @media (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

export { Container, Button, TextInput, Page, Column, Layout, Wrapper };
