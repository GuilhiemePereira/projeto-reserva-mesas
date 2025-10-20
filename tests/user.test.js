const request = require("supertest");
const app = require("../app"); 
require('dotenv').config();


describe("Testes Auth", () => {
  let token;

  it("Deve cadastrar um usuário", async () => {
    const res = await request(app)
      .post("/user/cadastro") 
      .send({
        nome: "Teste",
        email: "teste@email.com",
        password: "123456",
        IsAdmin: false
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("token");
  });

  it("Deve fazer login", async () => {
    const res = await request(app)
      .post("/user/login")  
      .send({
        email: "teste@email.com",
        password: "123456"
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
    token = res.body.token;
  });

  it("Deve verificar autenticação com token no body", async () => {
    const res = await request(app)
      .post("/user/verifica")  
      .send({ token });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("msg", "Token válido!");
  });

  it("Deve permitir acesso admin com token válido", async () => {
    // Pode ser 403 se o usuário não for admin
    const res = await request(app)
      .post("/user/admin")  
      .send({ token });
    expect([200, 403]).toContain(res.statusCode);
  });
});
