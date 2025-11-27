import { Schema } from "mongoose";
import mongoose from "mongoose";

const houseSchema = new Schema({
  id: {
    type: String,
  },
  houseNumber: {
    type: String,
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  houseType: {
    type: String,
  },
  numberOfOccupants: {
    type: String,
  },
owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
}
});

export const HouseModel = mongoose.model("House", houseSchema);
