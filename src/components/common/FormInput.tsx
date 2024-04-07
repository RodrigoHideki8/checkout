import React, { ChangeEvent } from "react";
import styled from "styled-components";
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
`;

const FormInput: React.FC<{
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
  }> = ({ label, name, type, value, placeholder, onChange, error }) => {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className={error ? 'is-invalid' : ''} />
        {error && <ErrorText>{error}</ErrorText>}
      </FormGroup>
    );
  };

export default FormInput