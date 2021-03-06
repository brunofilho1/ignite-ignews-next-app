## 💻 Sobre o projeto

Ignews é um portal de notícias pago, em que você precisa se autenticar com o GitHub e se inscrever caso queira ler as postagens completas. Usando as APIs de processamento de pagamentos do Stripe, o CMS Prismic para escrever seus posts e o FaunaDB como banco de dados.

<h1 align="center">
    <img width="900px" alt="Imagem da aplicação" src=".github/ignews-home.PNG" />
</h1>

<h1 align="center">
    <img width="900px" alt="Imagem da tela de Posts" src=".github/ignews-posts.PNG" />
</h1>

<br>

## 🧪 Tecnologias usadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Styled Components](https://styled-components.com/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic](https://prismic.io/)

## 🔗 Clone a aplicação

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/brunofilho1/ignite-ignews-next-app
$ cd ignite-ignews-next-app
```

## 🚀 Como iniciar a aplicação

Para iniciá-lo, siga os passos abaixo:

```bash
# Instalando dependências:
$ yarn

# Rodando em modo de desenvolvimento:
$ yarn dev
```

## Ouvindo os eventos do stripe em desenvolvimento:

```bash
# Em outro terminal no mesmo diretório, faça login:
$ ./stripe.exe login

# Depois rode esse comando para funcionar os webhooks:
$ ./stripe listen --forward-to localhost:3000/api/webhooks

```

<h1 align="center">
    <img width="900px" alt="Página com preview do post para pessoas não assinantes" src=".github/ignews-preview.PNG" />
</h1>

---

## Cartões fakes para teste do stripe
Qualquer endereço inserido no formulário será validado no pagamento, não necessita que seja dados reais!

Pagamento bem-sucedido:

- 4242424242424242

Falha no pagamento

- 4000000000009995

Precisa de autenticação

- 4000002500003155

---

<h1 align="center">
    <img width="900px" alt="Tela de checkout para pagamento do stripe" src=".github/stripe-checkout.PNG" />
</h1>

O app estará disponível no seu browser pelo endereço http://localhost:3000 assim que iniciado.

## 🌐 Live preview

Sem Live Preview

---
