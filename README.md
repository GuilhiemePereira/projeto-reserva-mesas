exemplos para rodar a API

(obs: deverão ser feitos no POSTMAN)

node server.js (roda o servidor)

1. Cadastro de usuário

Endpoint: POST /user/cadastro

Body (JSON):

{
  "nome": "Vitor",
  "email": "vitor@example.com",
  "password": "123456"
}

2. Fazer login (POST /user/login)

URL: http://localhost:3000/auth/login

Método: POST

Body: (JSON)

{
  "email": "teste@email.com",
  "password": "123456"
}


URL: http://localhost:3000/user/verifica (ou /user/admin)

Método: POST

Body: (JSON)

3. Fazer verificação com o token

URL: http://localhost:3000/user/verifica (ou /user/admin)

Método: POST

Body: (JSON)

{
  "token": "SEU_TOKEN_JWT_AQUI"
}
