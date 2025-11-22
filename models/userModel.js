import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
  id: {
    type: String,
  },
  userId: {
    type: String,
  },
  firstName: {
    type: String,
    maxLenght: 50,
  },
  lastName: {
    type: String,
    maxLenght: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    maxLenght: 18,
    unique: true,
  },
  address: {
    type: String,
  },
  lga: {
    type: String,
  },
  vehicles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
});

export const UsersModel = mongoose.model("User", userSchema);
