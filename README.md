# Documentação do Checkout

## Visão Geral
O checkout é uma parte crucial de qualquer aplicativo de comércio eletrônico. Ele permite que os usuários revisem e finalizem suas compras, inserindo informações de pagamento e envio. A documentação a seguir descreve os componentes e funcionalidades do checkout desenvolvido para nossa aplicação.

## Componentes

### CheckoutForm

#### Descrição
O componente CheckoutForm é responsável por encapsular todo o processo de checkout, incluindo a submissão dos dados do formulário.

#### Props
- `onSubmit`: Função de retorno de chamada que é acionada quando o formulário de checkout é submetido.

### PaymentMethod

#### Descrição
O componente PaymentMethod controla o método de pagamento selecionado pelo usuário durante o processo de checkout. Ele exibe diferentes formas de pagamento, como cartão de crédito, PIX e boleto, e coleta informações correspondentes ao método de pagamento escolhido.

#### Props
- `activeTab`: String que representa o método de pagamento ativo selecionado pelo usuário.
- `onTabChange`: Função de retorno de chamada que é acionada quando o usuário seleciona um novo método de pagamento.
- `formData`: Objeto contendo os dados do formulário de pagamento.
- `onChange`: Função de retorno de chamada que é acionada quando ocorrem alterações nos campos do formulário de pagamento.
- `errors`: Objeto contendo mensagens de erro para os campos do formulário de pagamento.
- `onSubmit`: Função de retorno de chamada que é acionada quando o formulário de pagamento é submetido.

### Outros Componentes
Além dos componentes principais descritos acima, também são utilizados outros componentes como FormInput e InputMask para coletar e formatar informações específicas, como números de cartão de crédito e datas de validade.

## Funcionalidades
- **Seleção de Método de Pagamento:** O usuário pode escolher entre diferentes métodos de pagamento, como cartão de crédito, PIX e boleto.
- **Preenchimento de Dados do Cartão de Crédito:** O usuário pode inserir informações do cartão de crédito, incluindo número do cartão, nome no cartão, data de validade e CVV.
- **Validação de Campos:** Todos os campos do formulário são validados para garantir que as informações inseridas sejam corretas e válidas.
- **Exibição de Erros:** Mensagens de erro são exibidas ao usuário se alguma informação inserida for inválida ou faltante.
- **Submissão do Formulário:** Após o preenchimento correto de todos os campos, o usuário pode submeter o formulário de checkout para concluir a compra.
