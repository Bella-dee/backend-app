import { uuidv7 } from "uuidv7";
import { TicketModel } from "../../models/ticketModel.js";
import handleResponse from "../../utils/index.js";

export const createNewTicket = async (req, res) => {
  try {
    const {
      offenceType,
      location,
      offenderPlateNumber,
      drivingLincenseNumber,
      fees,
    } = req.body;

    const newTicket = new TicketModel({
      id: uuidv7(),
      offenceType,
      location,
      offenderPlateNumber,
      drivingLincenseNumber,
      fees,
      created_at: new Date(),
      status: 'pending',
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

export const getAllTicket = async (_req, res) => {
  try {
    const allTicket = await TicketModel.find(
      {},
      { _id: 0, __v: 0, updatedAt: 0 }
    );

    if (!allTicket) {
      return handleResponse(res, 200, "No Ticket Found", {
        success: true,
        data: {},
      });
    }
    return handleResponse(res, 200, "Ticket data fetched successfully", {
      success: true,
      data: allTicket,
    });
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal server error", {
      success: false,
    });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { fees, status } = req.body;

    if (!id) {
      return handleResponse(res, 400, "Missing required field: id", {
        success: false,
      });
    }

    const updatedTicket = await TicketModel.findOneAndUpdate(
      { id },
      { fees, status, updated_at: new Date() },
      { new: true, projection: { _id: 0, __v: 0, createdAt: 0 } }
    );

    if (!updatedTicket) {
      return res.status(404).json({
        message: " Ticket not found",
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
    const { id } = req.params;

    if (!id) {
      return handleResponse(
        res,
        400,
        "Missing required field: drivingLicenseNumber",
        {
          success: false,
        }
      );
    }
    const ticketToDelete = await TicketModel.findOneAndDelete(
      { id: id },
      {
        options: { new: true },
      }
    );

    if (!ticketToDelete) {
      return handleResponse(res, 404, "Ticket not found", { success: false });
    }
    return handleResponse(res, 200, "Ticket deleted sucessfully", {
      success: true,
    });
  } catch (error) {
    console.error("Error deleting Ticket:", error);
    return handleResponse(res, 200, "Internal server error", {
      sucess: false,
    });
  }
};
