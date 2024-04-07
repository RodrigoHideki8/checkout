import React, { ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import CheckoutForm from '../checkout/CheckoutForm'
import FormInput from '../common/FormInput'
import InputMask from 'react-input-mask'

interface FormData {
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

interface PaymentMethodProps {
  activeTab: string
  onTabChange: (method: string) => void
  formData: FormData
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  errors: { [key: string]: string }
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const PaymentTabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

const PaymentTab = styled.div<{ active: boolean }>`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#007bff' : 'transparent')};
  color: ${props => (props.active ? 'white' : '#000')};
`
const MaskedInput = styled(InputMask)`
  width: 150px; /* Define o tamanho do InputMask */
  height: 30px; /* Define a altura do InputMask */

`;
const Column = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Define duas colunas com largura mínima de 300px */

`;
const PaymentMethod: React.FC<PaymentMethodProps> = ({
  activeTab,
  onTabChange,
  formData,
  onChange,
  errors,
  onSubmit
}) => {
  return (
    <CheckoutForm onSubmit={onSubmit}>
      <PaymentTabs>
        <PaymentTab
          active={activeTab === 'creditCard'}
          onClick={() => onTabChange('creditCard')}
        >
          Cartão de Crédito
        </PaymentTab>
        <PaymentTab
          active={activeTab === 'pix'}
          onClick={() => onTabChange('pix')}
        >
          PIX
        </PaymentTab>
        <PaymentTab
          active={activeTab === 'bankslip'}
          onClick={() => onTabChange('bankslip')}
        >
          Boleto
        </PaymentTab>
      </PaymentTabs>

      {activeTab === 'creditCard' && (
                        <div>


          <FormInput
            label='Número do cartão:'
            name='cardNumber'
            type='number'
            placeholder='XXXX XXXX XXXX XXXX'
            value={formData.cardNumber}
            onChange={onChange}
            error={errors.numeroCartao}
          />
          <FormInput
            label='Nome no cartão:'
            name='cardHolderName'
            type='text'
            placeholder='Nome Completo'
            value={formData.cardHolderName}
            onChange={onChange}
            error={errors.nomeCartao}
          />
            <Column>
            <label><strong>Data de validade:</strong></label>
            <MaskedInput
              mask='99/99'
              maskPlaceholder='MM/AA'
              value={formData.cardExpiresAt}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange({
                  target: {
                    name: 'cardExpiresAt',
                    value: (e.target as HTMLInputElement).value // Corrigindo para acessar o valor do input
                  }
                } as React.ChangeEvent<HTMLInputElement>)
              }
            />
            {errors.dataValidade && <span>{errors.dataValidade}</span>}
            <label><strong>CVV:</strong></label>

            <FormInput
              label=''
              name='cardCVV'
              type='number'
              placeholder='123'
              value={formData.cardCVV}
              onChange={onChange}
              error={errors.codigoSeguranca}
            />          
</Column>

       </div>
      )}

      {/* Render other fields based on activeTab */}
      {/* Additional fields for PIX and Boleto */}
      {/* FormInput components for other fields... */}
    </CheckoutForm>
  )
}

export default PaymentMethod
