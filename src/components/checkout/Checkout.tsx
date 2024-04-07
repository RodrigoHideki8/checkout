import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import CheckoutForm from './CheckoutForm';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  cep: string;
  cupomDesconto: string;
  numeroCartao: string;
  nomeCartao: string;
  dataValidade: string;
  codigoSeguranca: string;
  metodoPagamento: string;
}



const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    endereco: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    cep: '',
    cupomDesconto: '',
    numeroCartao: '',
    nomeCartao: '',
    dataValidade: '',
    codigoSeguranca: '',
    metodoPagamento: 'cartaoCredito',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        cpf: '',
        endereco: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: '',
        cep: '',
        cupomDesconto: '',
        numeroCartao: '',
        nomeCartao: '',
        dataValidade: '',
        codigoSeguranca: '',
        metodoPagamento: 'cartaoCredito',
      });
      setErrors({});
    }
  };

  const validateForm = (): boolean => {
    let errors: { [key: string]: string } = {};
    let formIsValid = true;

    if (!formData.nome.trim()) {
      formIsValid = false;
      errors['nome'] = 'Por favor, insira seu nome.';
    }

    if (!formData.email.trim()) {
      formIsValid = false;
      errors['email'] = 'Por favor, insira seu email.';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email.trim())) {
        formIsValid = false;
        errors['email'] = 'Por favor, insira um email válido.';
      }
    }

    if (!formData.telefone.trim()) {
      formIsValid = false;
      errors['telefone'] = 'Por favor, insira seu telefone.';
    } else {
      const telefonePattern = /^\d{10,11}$/;
      if (!telefonePattern.test(formData.telefone.trim())) {
        formIsValid = false;
        errors['telefone'] = 'Por favor, insira um telefone válido.';
      }
    }

    if (!formData.cpf.trim()) {
      formIsValid = false;
      errors['cpf'] = 'Por favor, insira seu CPF.';
    } else {
      const cpfPattern = /^\d{11}$/;
      if (!cpfPattern.test(formData.cpf.trim())) {
        formIsValid = false;
        errors['cpf'] = 'Por favor, insira um CPF válido.';
      }
    }

    if (!formData.endereco.trim()) {
      formIsValid = false;
      errors['endereco'] = 'Por favor, insira seu endereço.';
    }

    if (!formData.rua.trim()) {
      formIsValid = false;
      errors['rua'] = 'Por favor, insira sua rua.';
    }

    if (!formData.numero.trim()) {
      formIsValid = false;
      errors['numero'] = 'Por favor, insira o número.';
    }

    if (!formData.bairro.trim()) {
      formIsValid = false;
      errors['bairro'] = 'Por favor, insira seu bairro.';
    }

    if (!formData.cidade.trim()) {
      formIsValid = false;
      errors['cidade'] = 'Por favor, insira sua cidade.';
    }

    if (!formData.estado.trim()) {
      formIsValid = false;
      errors['estado'] = 'Por favor, insira seu estado.';
    }

    if (!formData.pais.trim()) {
      formIsValid = false;
      errors['pais'] = 'Por favor, insira seu país.';
    }

    if (!formData.cep.trim()) {
      formIsValid = false;
      errors['cep'] = 'Por favor, insira seu CEP.';
    } else {
      const cepPattern = /^\d{5}-\d{3}$/;
      if (!cepPattern.test(formData.cep.trim())) {
        formIsValid = false;
        errors['cep'] = 'Por favor, insira um CEP válido (formato: 12345-678).';
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <FormInput
        label="Nome:"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        error={errors.nome}
      />
      <FormInput
        label="Email:"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormInput
        label="Telefone:"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        error={errors.telefone}
      />
      <FormInput
        label="CPF:"
        name="cpf"
        value={formData.cpf}
        onChange={handleChange}
        error={errors.cpf}
      />
      <FormInput
        label="Endereço:"
        name="endereco"
        value={formData.endereco}
        onChange={handleChange}
        error={errors.endereco}
      />
      <FormInput
        label="Rua:"
        name="rua"
        value={formData.rua}
        onChange={handleChange}
        error={errors.rua}
      />
      <FormInput
        label="Número:"
        name="numero"
        value={formData.numero}
        onChange={handleChange}
        error={errors.numero}
      />
      <FormInput
        label="Bairro:"
        name="bairro"
        value={formData.bairro}
        onChange={handleChange}
        error={errors.bairro}
      />
      <FormInput
        label="Cidade:"
        name="cidade"
        value={formData.cidade}
        onChange={handleChange}
        error={errors.cidade}
      />
      <FormInput
        label="Estado:"
        name="estado"
        value={formData.estado}
        onChange={handleChange}
        error={errors.estado}
      />
      <FormInput
        label="País:"
        name="pais"
        value={formData.pais}
        onChange={handleChange}
        error={errors.pais}
      />
      <FormInput
        label="CEP:"
        name="cep"
        value={formData.cep}
        onChange={handleChange}
        error={errors.cep}
      />
      <FormInput
        label="Cupom de desconto:"
        name="cupomDesconto"
        value={formData.cupomDesconto}
        onChange={handleChange}
        error={errors.cupomDesconto}
      />
      <FormInput
        label="Número do cartão:"
        name="numeroCartao"
        value={formData.numeroCartao}
        onChange={handleChange}
        error={errors.numeroCartao}
      />
      <FormInput
        label="Nome no cartão:"
        name="nomeCartao"
        value={formData.nomeCartao}
        onChange={handleChange}
        error={errors.nomeCartao}
      />
      <FormInput
        label="Data de validade:"
        name="dataValidade"
        value={formData.dataValidade}
        onChange={handleChange}
        error={errors.dataValidade}
      />
      <FormInput
        label="Código de segurança:"
        name="codigoSeguranca"
        value={formData.codigoSeguranca}
        onChange={handleChange}
        error={errors.codigoSeguranca}
      />
      <FormSelect
        label="Método de pagamento:"
        name="metodoPagamento"
        value={formData.metodoPagamento}
        onChange={handleChange}
        options={[
          { value: 'cartaoCredito', label: 'Cartão de Crédito' },
          { value: 'pix', label: 'PIX' },
          { value: 'boleto', label: 'Boleto' },
        ]}
        error={errors.metodoPagamento}
      />
      <SubmitButton type="submit">Finalizar compra</SubmitButton>
    </CheckoutForm>
  );
};

export default Checkout;