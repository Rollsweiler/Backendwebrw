const mongoose = require("mongoose");

const RequestVipClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    unique: true,
    required: true,
  },
  favoriteProduct: {
    type: String,
    required: true,
  },
});

const RequestVipClient = mongoose.model(
  "RequestVipClient",
  RequestVipClientSchema
);

module.exports = RequestVipClient;
