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
  width: 100%;
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
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
  }> = ({ label, name, value, onChange, error }) => {
    return (
      <FormGroup>
        <Label>{label}</Label>
        <Input type="text" name={name} value={value} onChange={onChange} className={error ? 'is-invalid' : ''} />
        {error && <ErrorText>{error}</ErrorText>}
      </FormGroup>
    );
  };

export default FormInput