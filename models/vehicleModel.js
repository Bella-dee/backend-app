import { Schema } from "mongoose";
import mongoose from "mongoose";

const vehicleSchema = new Schema({
  id: {
    type: String,
  },
  plateNumber: {
    type: String,
    unique: true,
  },
  color: {
    type: String,
  },
  model: {
    type: String,
  },
  brand: {
    type: String,
  },
  type: {
    type: String,
  },
tickets: [{
    type: Schema.Types.ObjectId,
    ref: "Ticket"
}],
owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
}
});

export const VehicleModel = mongoose.model("Vehicle", vehicleSchema);
