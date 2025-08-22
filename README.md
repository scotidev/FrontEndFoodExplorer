# Food Explorer

Aplicação SPA de um restaurante online, desenvolvida durante o curso Explorer Fullstack da Rocketseat. Este repositório contém o front-end construído com React + Vite, integrado a uma API própria.

## Preview

<p align="center">
  <div style="display: flex; gap: 10px; justify-content: center; align-items: stretch;">
    <img src="/public/screenshot1.jpg" alt="Menu" style="width: 50%; height: auto; object-fit: cover;" />
    <div style="display: flex; flex-direction: column; gap: 10px; width: 50%;">
      <img src="/public/screenshot2.png" alt="Home" style="width: 100%; height: auto; object-fit: cover;" />
      <img src="/public/screenshot3.png" alt="Cart" style="width: 100%; height: auto; object-fit: cover;" />
      <img src="/public/screenshot4.png" alt="Admin" style="width: 100%; height: auto; object-fit: cover;" />
    </div>
  </div>
</p>

## Credenciais de teste

O projeto está hospedado no hoster Netlify e pode ser acessado clicando no link a seguir:

[FoodExplorer42](https://foodexplorer42.netlify.app/)

Para efetuar login na aplicação, utilize as credenciais:

**Administrador:**

- **Administrador**
  - login: admin@email.com
  - senha: 123456
- **Usuário**
  - login: customer@email.com
  - senha: 123456

Ou crie seu próprio usuário!

## Sobre o projeto

O Food Explorer permite que clientes naveguem por pratos, pesquisem por nome/ingrediente, favoritem itens e adicionem ao carrinho. Administradores podem gerenciar pratos (CRUD), incluindo criação, edição e exclusão. A aplicação possui rotas protegidas e controle de acesso por papéis de usuário.

## Rodar o App Localmente

- Node.js 18+ (recomendado LTS mais recente)
- npm 9+ ou pnpm/yarn

## Instalação e execução

1. Clone o repositório
   ```bash
   git clone https://github.com/scotidevx/FrontEndFoodExplorer.git
   cd FrontEndFoodExplorer
   ```
2. Instale as dependências
   ```bash
   npm install
   ```
3. Ambiente de desenvolvimento
   ```bash
   npm run dev
   ```

A base URL da API é configurada automaticamente por ambiente em `src/services/api.js`:

## Funcionalidades

**Gerais:**

- Login;
- Cadastro de usuários;
- Visualização de Pratos;
- Pesquisa dos pratos por nome e ingredientes;
- Logout.

**Admin:**

- Cadastro, Edição, Exclusão e Visualização de pratos (CRUD);
- Upload e atualização de imagens dos pratos.

**Usuário:**

- Favoritar e desfavoritar pratos;
- Gerenciamento de carrinho (adicionar, atualizar quantidade e remover itens).

## Bibliotecas Utilizadas

- Axios
- Styled Components
- React DOM
- React Router DOM
- React Icons

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=js,html,css,react,vite,styledcomponents)](https://skillicons.dev)
