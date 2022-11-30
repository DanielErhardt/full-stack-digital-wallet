# Full Stack Digital Wallet

<details> 
<summary>:brazil: Versão em Português</summary>

## Objetivo

Construir uma aplicação full stack de carteira digital com as seguintes ferramentas:

### Frontend:

- React
- Typescript

### Backend:

- NodeJS
- Typescript
- Sequelize
- Postgres
- Docker

## Funcionalidades

- Criar uma nova conta de usuário.
- Verificar seu saldo.
- Acessar a sua conta e fazer transações, bem como consultar transações existentes.
- Fazer controle de atividades de usuários dependentes, caso você seja um "responsável". É possível ver o saldo e as transações dos usuários que são seus dependentes.

## Usuários existentes

| username       | password        | role     | guardian   |
| -------------- | --------------- | -------- | ---------- |
| Mr Tolkien     | awesomeMind     | guardian | none       |
| Gandalf        | youShallNotPass | user     | Mr Tolkien |
| Sauron         | ruleThemAll     | user     | Mr Tolkien |
| Gollum         | myPrecisous     | user     | Mr Tolkien |
| tia.dany       | mySunAndStars   | guardian | none       |
| joao.das.neves | sabeNada        | user     | tia.dany   |

## Observações

- Não é possível criar novas contas de responsáveis, mas há como explorar essa funcionalidade fazendo login com os usuários de role "guardian" acima.

- Essa aplicação foi criada fazendo uso de queries associadas no Postgres com configurações do Sequelize. Muitos dos métodos implementados nas Services e nas Models não estão sendo utilizados nessa aplicação em si, mas servem para demontrar como é possível fazer buscas avançadas por meio das associações, como, por exemplo, usar a model Accounts, integrada à tabela "accounts" no banco de dados, para encontrar uma conta usando o nome do seu dono, que é normalmente acessado por outra model e/ou tabela.

## Executando a aplicação localmente

Certifique-se de que tem o Node, o Docker e o docker-compose instalados. Em seguida acesse o diretório raiz do projeto por meio do terminal e execute os comandos a seguir.

- Para instalar os containers docker:

```
npm run compose:up
```

Aguarde enquanto o compose cria os containers e faz a verificação de saúde. Pode levar aproximadamente um minuto.

- Para construir e popular o banco de dados:

```
npm run db:build
```

Após a conclusão da execução do comando é só acessar http://localhost:3000/ e usar a aplicação.

- Para remover os containers docker ao terminar de usar o aplicativo:

```
npm run compose:down
```

<br />

## API Endpoints

### Users

| Requisição | URL                                    |
| ---------- | -------------------------------------- |
| `POST`     | http://localhost:3001/users/login      |
| `POST`     | http://localhost:3001/users            |
| `GET`      | http://localhost:3001/users/self       |
| `GET`      | http://localhost:3001/users/dependents |
| `GET`      | http://localhost:3001/users/:id        |

### Transactions

| Requisição | URL                                |
| ---------- | ---------------------------------- |
| `POST`     | http://localhost:3001/transactions |

<br />

</details>

<details open> 
<summary>:us: English Version</summary>

## Objective

To build a full stack digital wallet app with the following tools:

### Frontend:

- React
- Typescript

### Backend:

- NodeJS
- Typescript
- Sequelize
- Postgres
- Docker

## Functionalities

- Create a new user account.
- Check your balance.
- Access your account and make transactions, as well as to consult existing transactions.
- Control activities of dependent users, if you are a "guardian". You can view the balance and transactions of users who are your dependents.

## Existing Users

| username       | password        | role     | guardian   |
| -------------- | --------------- | -------- | ---------- |
| Mr Tolkien     | awesomeMind     | guardian | none       |
| Gandalf        | youShallNotPass | user     | Mr Tolkien |
| Sauron         | ruleThemAll     | user     | Mr Tolkien |
| Gollum         | myPrecisous     | user     | Mr Tolkien |
| tia.dany       | mySunAndStars   | guardian | none       |
| joao.das.neves | sabeNada        | user     | tia.dany   |

## Observations

- Its not possible to create new guardian accounts, but you can explore this functionality by logging in with the "guardian" role users above.

- This application was created using associated queries in Postgres with Sequelize. Many of the methods implemented in the Services and Models are not being used in this application itself, but they demonstrate how it is possible to perform advanced searches through associations, such as using the Accounts model, integrated to the "accounts" table in the database, to find an account using its owner's name, which is normally accessed through another model and table.

## Running the application locally

Make sure you have Node, Docker and docker-compose installed. Then access the root directory of the project through the terminal and execute the following commands.

- To install the docker containers:

```
npm run compose:up
```

Wait while the composer creates the containers and healthchecks them. It may take one minute or so.

- To build and populate the database:

```
npm run db:build
```

Then you can go to http://localhost:3000/ and use the application.

- To remove the docker containers when you are done:

```
npm run compose:down
```

<br />

## API Endpoints

### Users

| Request | URL                                    |
| ------- | -------------------------------------- |
| `POST`  | http://localhost:3001/users/login      |
| `POST`  | http://localhost:3001/users            |
| `GET`   | http://localhost:3001/users/self       |
| `GET`   | http://localhost:3001/users/dependents |
| `GET`   | http://localhost:3001/users/:id        |

### Transactions

| Request | URL                                |
| ------- | ---------------------------------- |
| `POST`  | http://localhost:3001/transactions |

<br />

</details>
