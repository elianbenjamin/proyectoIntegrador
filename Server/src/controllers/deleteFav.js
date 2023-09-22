const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).send("No se encuentra el personaje con el id");

    await Favorite.destroy({ where: { id } });

    const saveFav = await Favorite.findAll();
    return res.status(200).json(saveFav);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteFav };
