import requestVipClientModel from "../models/RequestVipClient";

export const create = async (req, res) => {
  try {
    const { name, email, phone, birthdate, direction, dni, favoriteProduct } =
      req.body;
    if (!name) {
      throw `No ha indicado el nombre`;
    }
    if (!email) {
      throw `No ha indicado el email`;
    }
    if (!phone) {
      throw `No ha indicado el telefono`;
    }
    if (!birthdate) {
      throw `No ha indicado el fecha nacimiento`;
    }
    if (!direction) {
      throw `No ha indicado el fecha direccion`;
    }
    if (!dni) {
      throw `No ha indicado rut`;
    }
    if (!favoriteProduct) {
      throw `No ha indicado producto favorito`;
    }
    const item = await requestVipClientModel.findOne({});
    if (item) {
      throw `Usuario ya registrado`;
    }
    const newItem = new requestVipClientModel({
      name,
      email,
      phone,
      birthdate,
      direction,
      dni,
      favoriteProduct,
    });
    await newItem.save();
    return res.json({ error: false });
  } catch (err) {
    return res.status(500).json(err);
  }
};
