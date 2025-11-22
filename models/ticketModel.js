import { Schema } from "mongoose";
import mongoose from "mongoose";

const ticketSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    offenceType: {
        type: String,
    },
    location: {
        type: String,
    },
    offenderPlateNumber: {
        type: String,
        maxLenght: 50,
    },
    drivingLincenseNumber: {
        type: String,
        unique: true,
    },
    fees: {
        type: String,
    },
    status: {
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

export const TicketModel = mongoose.model("Ticket", ticketSchema);
