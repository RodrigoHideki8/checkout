import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
const FormGroup = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  font-weight: bold;
`

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
`
const FormSelect: React.FC<{
  label: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
  error?: string
}> = ({ label, name, value, onChange, options, error }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'is-invalid' : ''}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      {error && <ErrorText>{error}</ErrorText>}
    </FormGroup>
  )
}

export default FormSelect
