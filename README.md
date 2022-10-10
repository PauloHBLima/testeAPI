# TesteAPI
# Claravista

## Objetivo
Desenvolver uma API para manipulação de dados de navegação em sites genericos.

## Como utilizar
- Faça o clone para sua máquina
```bash
https://github.com/PauloHBLima/testeAPI.git
```
- Instale todas as dependências
```bash
npm install
```
- Crie uma conta no site abaixo para ter acesso ao banco de dados: 
```bash
https://account.mongodb.com/account/login?signedOut=true
```
- Depois da conta criada, siga esses passos:
```bash
- Create a Shared Cluster
- Connect (mongoDB drivers) - será gerado um link para conectar sua aplicação ao banco.
```

- Vá até o arquivo .env.example e insira as configurações de autenticação

```bash
// Usuario de sua máquina (root padrão)
DB_USER=
// Nome que é configurado quando o banco foi criado no mongodb ATLAS
DB_PASS=
// Senha que é configurada quando o banco foi criado no mongodb ATLAS
```
- Crie o a conexão com o banco de dados
```bash
mongoose.connect(link gerado para conectar ao banco)
```
- Faça a inserção de valores padrão em seu banco de dados na```Model```
```bash

- tabela do banco de dados em ```Collections```
```bash
npm start
```
## Documentação da API via Postman
https://documenter.getpostman.com/view/22468594/2s83ziN4BJ
