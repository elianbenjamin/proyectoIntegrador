const { User } = require("../DB_connection");

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    console.log(email);

    if (!email || !password) res.status(400).send("Faltan datos");

    const usuario = await User.findOne({ where: { email } });
    if (!usuario) res.status(404).send("Usuario no encontrado");

    return usuario.password === password
      ? res.json({ access: true })
      : res.status(403).send("Contraseña incorrecta");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
