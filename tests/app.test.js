const request = require("supertest");
const app = require("../src/server/server");
describe("Pruebas de Ruta POST", () => {
  test("Debe responder con validación", async () => {
    const response = await request(app).post("/token/v2/tokens").send({
      email: "gian.corzo@gmail.com",
      card_number: "4111111111111112",
      cvv: "12",
      expiration_year: "2025",
      expiration_month: "09",
    });
    console.log({
      response,
    });
    expect(response.statusCode).toBe(400);
  });

  test("Debe responder con un token correspondiente", async () => {
    const response = await request(app).post("/token/v2/tokens").send({
      email: "gian.corzo@gmail.com",
      card_number: "4111111111111111",
      cvv: "123",
      expiration_year: "2025",
      expiration_month: "09",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.token).not.toBe(undefined);
  });

  test("Debe no responder con un token", async () => {
    const response = await request(app).post("/token/v2/tokens").send({
      email: "gian.corzo@gmail.com",
      card_number: "4111111111111112",
      cvv: "123",
      expiration_year: "2025",
      expiration_month: "09",
    });
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Credenciales inválidas");
  });
});
