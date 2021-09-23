import React from "react";
import styled from "styled-components";

// import { Container } from './styles';
interface ToastifyCustomMessageProps {
  title: string;
  message: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  strong {
    color: var(--gray-100);
    font: 600 1rem "Inter", sans-serif !important;
    margin-bottom: 4px;
  }

  p {
    color: var(--gray-100);
    font: 400 1rem "Inter", sans-serif !important;
  } 
`;

export const ToastifyCustomMessage = ({ title, message }: ToastifyCustomMessageProps) => {
  return (
    <Container>
      <strong>{title}</strong>
      <p>{message}</p>
    </Container>
  );
};
