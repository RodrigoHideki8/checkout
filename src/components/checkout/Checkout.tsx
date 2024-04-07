import React, { useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import FormInput from '../common/FormInput'
import CheckoutForm from './CheckoutForm'
import PaymentMethod from '../payment/PaymentMethod'

interface CheckoutFormData {
  nome: string
  email: string
  telefone: string
  cpf: string
  endereco: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  estado: string
  pais: string
  cep: string
  cupomDesconto: string
  cardNumber: string
  cardHolderName: string
  cardExpiresAt: string
  cardCVV: string
  method: string
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
`
const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide em duas colunas iguais */
  gap: 20px; /* Espaçamento entre os campos */
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutFormData>({
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
    cardNumber: '',
    cardHolderName: '',
    cardExpiresAt: '',
    cardCVV: '',
    method: 'creditCard'
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [activeTab, setActiveTab] = useState<string>('cartaoCredito')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleTabChange = (method: string) => {
    setActiveTab(method)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      console.log(formData)
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
        cardNumber: '',
        cardHolderName: '',
        cardExpiresAt: '',
        cardCVV: '',
        method: 'cartaoCredito'
      })
      setErrors({})
    }
  }

  const validateForm = (): boolean => {
    let errors: { [key: string]: string } = {}
    let formIsValid = true

    if (!formData.nome.trim()) {
      formIsValid = false
      errors['nome'] = 'Por favor, insira seu nome.'
    }

    if (!formData.email.trim()) {
      formIsValid = false
      errors['email'] = 'Por favor, insira seu email.'
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(formData.email.trim())) {
        formIsValid = false
        errors['email'] = 'Por favor, insira um email válido.'
      }
    }

    if (!formData.telefone.trim()) {
      formIsValid = false
      errors['telefone'] = 'Por favor, insira seu telefone.'
    } else {
      const telefonePattern = /^\d{10,11}$/
      if (!telefonePattern.test(formData.telefone.trim())) {
        formIsValid = false
        errors['telefone'] = 'Por favor, insira um telefone válido.'
      }
    }

    if (!formData.cpf.trim()) {
      formIsValid = false
      errors['cpf'] = 'Por favor, insira seu CPF.'
    } else {
      const cpfPattern = /^\d{11}$/
      if (!cpfPattern.test(formData.cpf.trim())) {
        formIsValid = false
        errors['cpf'] = 'Por favor, insira um CPF válido.'
      }
    }

    if (!formData.endereco.trim()) {
      formIsValid = false
      errors['endereco'] = 'Por favor, insira seu endereço.'
    }

    if (!formData.rua.trim()) {
      formIsValid = false
      errors['rua'] = 'Por favor, insira sua rua.'
    }

    if (!formData.numero.trim()) {
      formIsValid = false
      errors['numero'] = 'Por favor, insira o número.'
    }

    if (!formData.bairro.trim()) {
      formIsValid = false
      errors['bairro'] = 'Por favor, insira seu bairro.'
    }

    if (!formData.cidade.trim()) {
      formIsValid = false
      errors['cidade'] = 'Por favor, insira sua cidade.'
    }

    if (!formData.estado.trim()) {
      formIsValid = false
      errors['estado'] = 'Por favor, insira seu estado.'
    }

    if (!formData.pais.trim()) {
      formIsValid = false
      errors['pais'] = 'Por favor, insira seu país.'
    }

    if (!formData.cep.trim()) {
      formIsValid = false
      errors['cep'] = 'Por favor, insira seu CEP.'
    } else {
      const cepPattern = /^\d{5}-\d{3}$/
      if (!cepPattern.test(formData.cep.trim())) {
        formIsValid = false
        errors['cep'] = 'Por favor, insira um CEP válido (formato: 12345-678).'
      }
    }

    setErrors(errors)
    return formIsValid
  }

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <h1>Checkout de Milhões</h1>
      <h2>Dados Pessoais</h2>
      <CheckoutGrid>
        <Column>
          <FormInput
            label='Nome:'
            name='nome'
            type='text'
            placeholder='Jose da Silva'
            value={formData.nome}
            onChange={handleChange}
            error={errors.nome}
          />
          <FormInput
            label='Email:'
            name='email'
            placeholder='example@gmail.com'
            type='email'
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />{' '}
        </Column>
        <Column>
          <FormInput
            label='Telefone:'
            name='telefone'
            type='tel'
            placeholder='11999999999'
            value={formData.telefone}
            onChange={handleChange}
            error={errors.telefone}
          />
          <FormInput
            label='CPF:'
            name='cpf'
            type='cpf'
            placeholder='12345678909'
            value={formData.cpf}
            onChange={handleChange}
            error={errors.cpf}
          />
        </Column>

        <h2>Endereço</h2>
        <Column>
          <FormInput
            label='CEP:'
            name='cep'
            type='cep'
            placeholder='11111111'
            value={formData.cep}
            onChange={handleChange}
            error={errors.cep}
          />
        </Column>
        <Column>
          <FormInput
            label='Rua:'
            name='rua'
            type='text'
            placeholder=''
            value={formData.rua}
            onChange={handleChange}
            error={errors.rua}
          />
          <FormInput
            label='Número:'
            name='numero'
            type='number'
            placeholder=''
            value={formData.numero}
            onChange={handleChange}
            error={errors.numero}
          />
          <FormInput
            label='Bairro:'
            name='bairro'
            type='text'
            placeholder=''
            value={formData.bairro}
            onChange={handleChange}
            error={errors.bairro}
          />
        </Column>
        <Column>
          <FormInput
            label='Cidade:'
            name='cidade'
            type='text'
            placeholder=''
            value={formData.cidade}
            onChange={handleChange}
            error={errors.cidade}
          />
          <FormInput
            label='Estado:'
            name='estado'
            type='text'
            placeholder=''
            value={formData.estado}
            onChange={handleChange}
            error={errors.estado}
          />
          <FormInput
            label='País:'
            name='pais'
            type='text'
            placeholder='Brasil'
            value={formData.pais}
            onChange={handleChange}
            error={errors.pais}
          />{' '}
        </Column>

        <Column>
          <h2>Promoção</h2>
          <FormInput
            label='Cupom de desconto:'
            name='cupomDesconto'
            type='text'
            placeholder=''
            value={formData.cupomDesconto}
            onChange={handleChange}
            error={errors.cupomDesconto}
          />
        </Column>
      </CheckoutGrid>

      <h2>Meios de Pagamento</h2>
      <PaymentMethod
        activeTab={activeTab}
        onTabChange={handleTabChange}
        formData={formData}
        onChange={handleChange}
        errors={errors}
        onSubmit={handleSubmit}
      />

      <SubmitButton type='submit'>
        {activeTab === 'creditCard'
          ? 'Finalizar compra'
          : activeTab === 'pix'
          ? 'Gerar Pix'
          : 'Gerar Boleto'}
      </SubmitButton>
    </CheckoutForm>
  )
}

export default Checkout
