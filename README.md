# Projeto

## Sumário
- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
  - [Back-end](#back-end)
  - [Front-end](#front-end)
- [Configuração](#configuração)
  - [Configuração de Portas](#configuração-de-portas)
- [Execução](#execução)
  - [Rodando o Back-end](#rodando-o-back-end)
  - [Rodando o Front-end](#rodando-o-front-end)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Introdução
Este projeto consiste em um sistema composto por um back-end e um front-end. As instruções abaixo guiarão você através do processo de instalação e execução de ambos.

## Pré-requisitos
Certifique-se de ter os seguintes softwares instalados em sua máquina:
- [Node.js](https://nodejs.org/) (inclui o npm)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instalação

### Back-end
1. Navegue até o diretório do projeto back-end.
2. Execute o comando abaixo para instalar as dependências:
    ```bash
    npm install
    ```

### Front-end
1. Navegue até o diretório do projeto front-end.
2. Execute o comando abaixo para instalar as dependências:
    ```bash
    npm install
    ```

## Configuração

### Configuração de Portas
Certifique-se de que as portas configuradas no projeto back-end estão corretas e compatíveis com as utilizadas pelo front-end, especialmente se você estiver utilizando o Expo para desenvolvimento mobile.

## Execução

### Rodando o Back-end
1. No diretório do projeto back-end, execute o comando abaixo para iniciar os containers do Docker:
    ```bash
    docker compose up -d
    ```
2. Em seguida, execute o comando abaixo para iniciar o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

### Rodando o Front-end
1. No diretório do projeto front-end, execute o comando abaixo para iniciar o projeto:
    ```bash
    npx start
    ```

## Tecnologias Utilizadas
- Node.js
- Docker
- Docker Compose
- Expo (ou qualquer outro framework utilizado para o front-end)

---
