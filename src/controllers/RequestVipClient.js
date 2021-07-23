import requestVipClientModel from "../models/RequestVipClient";

export const create = async (req, res) => {
  try {
    const { name, email, phone, birthdate, direction, dni, favoriteProduct } =
      req.body;
    const item = new requestVipClientModel({
      name,
      email,
      phone,
      birthdate,
      direction,
      dni,
      favoriteProduct,
    });
    await item.save();
    res.json({ error: false });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
