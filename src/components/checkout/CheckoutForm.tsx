import React, { FormEvent, ReactNode } from 'react';
import styled from 'styled-components';

const CheckoutFormStyled = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const CheckoutForm: React.FC<{
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children?: ReactNode; 
}> = ({ onSubmit, children }) => {
  return <CheckoutFormStyled onSubmit={onSubmit}>{children}</CheckoutFormStyled>;
};

export default CheckoutForm;