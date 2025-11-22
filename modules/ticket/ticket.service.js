import { uuidv7 } from "uuidv7";
0;
import { TicketModel } from "../../models/ticketModel.js";
import { updateVehicle } from "../vehicle/vehicle.service.js";

export const createNewTicket = async (req, res) => {
  try {
    const {
      offenceType,
      location,
      offenderPlateNumber,
      drivingLincenseNumber,
      fees,
      status,
    } = req.body;

    const newTicket = new TicketModel({
      id: uuidv7(),
      offenceType,
      location,
      offenderPlateNumber,
      drivingLincenseNumber,
      fees,
      status,
    });

    await newTicket.save();

    return res
      .status(201)
      .json({ message: " New ticket created succesfully", ticket: newTicket });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getAllTicket = async (req, res) => {
  try {
    const tickets = await TicketModel.find(
      {},
      { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }
    );

    return res.status(200).json({
      message: "Tickets fetched sucessfully",
      tickets,
    });
  } catch (error) {
    console.error("Error fetching ticket:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { offenceType, location, fees, status } = req.body;

    const updatedTicket = await TicketModel.findOneAndUpdate(
      { offenceType, location, fees, status },
      { new: true, projection: { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 } }
    );

    if (!updateVehicle) {
      return res.status(404).json({
        message: " Ticket not found  ",
      });
    }

    return res.status(200).json({
      message: "Ticket updated sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { drivingLincenseNumber } = req.body;

    const deletedTicket= await TicketModel.findOneAndDelete({ drivingLincenseNumber });

    if (!deletedTicket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }
    return res.status(200).json({
      message: "Ticket deleted sucessfully",
    });
  } catch (error) {
    console.error("/Error deleting Ticket:", error);
    return res.status(500).json({
      message: "Failed to delete ticket",
      error: error.message,
    });
  }
};
 