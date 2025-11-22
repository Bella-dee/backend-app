import dotenv from "dotenv";
import mongoose from "mongoose";
import debug from "debug";

dotenv.config();

const log = debug("reg-api");

const DB = process.env.MONGOURLURL;
export const connectDB = async () => {
  try {
    await mongoose.connect(DB).then(({ connection }) => {
      console.log("database connection established");

      connection.on("error", (e) => {
        log("database connection failed");
        log(e);
      });
    });
  } catch (err) {
    console.error(err);
  }
};