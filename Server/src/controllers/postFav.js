const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      res.status(401).send("Faltan datos");
    }

    await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });

    const saveFav = await Favorite.findAll();
    return res.status(200).json(saveFav);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { postFav };
