const server = require("../src/app");
const session = require("supertest");

const agent = session(server);

describe("Test de Rutas", () => {
  describe("GET / /rickandmorty/character/:id", () => {
    it("Responde con el status 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Si hay un error responde con el status 500", async () => {
      await agent.get("/rickandmorty/character/3312").expect(500);
    });

    it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "origin", "status" e "image"', async () => {
      const {body} = await agent.get("/rickandmorty/character/1");

      const propiedades = [
        "id",
        "name",
        "species",
        "gender",
        "origin",
        "status",
        "image",
      ];

      // const keys = Object.keys(body) // ["id", "name", "species", "gender", "origin", "status" , "image"]
      //   propiedades.forEach((prop) => {
      //   expect(keys).toHaveProperty(prop);
      // });

      propiedades.forEach((prop) => {
        expect(body).toHaveProperty(prop);
      });
    });
  });
  describe("GET / rickandmorty/login", () => {
    // let access = {access:true}

    it("Informacion correcta pase usted", async () => {
      const {body} = await agent.get(
        "/rickandmorty/login?email=elian@gmail.com&password=123456asd"
      );
      expect(body.access).toEqual(true);
    });

    it("Informacion incorrecta 'You Shall Not Pass 🧙‍♂️'", async () => {
      const {body} = await agent.get(
        "/rickandmorty/login?email=batrolomiau@gmail.com&password=elmalo"
      );
      expect(body.access).toEqual(false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const testCharA = {id: 1, name: "TEST A"};
    const testCharB = {id: 2, name: "TEST B"};

    it("DEvuelve un array con la informacion enviada", async () => {
      const {body} = await agent.post("/rickandmorty/fav").send(testCharA);

      expect(body).toContainEqual(testCharA); //[{}]
    });

    it("DEvuelve un array con la informacion enviada", async () => {
      const {body} = await agent.post("/rickandmorty/fav").send(testCharB);

      expect(body).toContainEqual(testCharA);
      expect(body).toContainEqual(testCharB);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const testCharA = {id: 1, name: "TEST A"};
    const testCharB = {id: 2, name: "TEST B"};

    it("Si no se elimina ningun personaje devuelve el mismo array", async () => {
      const {body} = await agent.delete("/rickandmorty/fav/3312");

      expect(body).toContainEqual(testCharA);
      expect(body).toContainEqual(testCharB);
    });

    it("Elimina al personaje recibido por ID", async () => {
      const {body} = await agent.delete("/rickandmorty/fav/2");

      expect(body).not.toContainEqual(testCharB);
    });
  });
});








/* const { default: axios } = require("axios");
const app = require("../src/app");
const session = require("supertest");
const request = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await request.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });
    it("Responde un objeto con las propiedades: 'id', 'name', 'species, 'gender', 'status', 'origin', 'image' ", async () => {
      const response = await axios("/rickandmorty/character/1");
      const props = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];
      props.forEach((prop) => {
        expect(response.body).toHaveProperty(prop);
      });
    });
    it("Si hay un error responde con status: 500", async () => {
      const response = await axios("/rickandmorty/character/122g");
      expect(response.statusCode).toBe(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
   

    it("Responde con un objeto en la propiedad access en true si la info del usuario en correcta", async () => {
      const {body} = await axios(
        "/rickandmorty/login?email=elian@gmail.com&password=123456asd"
      );
      expect(body.access).toEqual(true);
    });
    it("Responde con un objeto en la propiedad access en false si la info del usuario no es correcta", async () => {
      const {body} = await axios(
        "/rickandmorty/login?email=elian@mail.com&password=123456asd"
      );
      expect(body.access).toEqual(false);
    });
  });
}); */
