# CBV-API

<p>API do Sistema de gerenciamento da Confederação Brasileira de Voleibol.</p>

# Instalação 

Será necessário a instalação do `Node.js` e o `Yarn`.

Em seguida, utilize o comando abaixo para instalar as dependências:

```bash
yarn install
```
# Subindo o Docker 

```bash
docker-compose up
```

# Iniciando a Apliação 

Execute o seguinte comando para iniciar o aplicativo em um ambiente de desenvolvimento:

Iniciar o Banco:
```bash
docker start CBV_DB
```
Iniciar a Aplicação 
```bash
docker start CBV_APP
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- [PostgresSQL](https://www.postgresql.org/)
