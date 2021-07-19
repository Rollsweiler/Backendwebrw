import mongoose from "mongoose";

import RequestVipClient from "./RequestVipClient";

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { RequestVipClient };

export { connectDb };

export default models;
