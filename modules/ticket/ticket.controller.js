import { Router } from "express";

import {
  createNewTicket,
  deleteTicket,
  getAllTicket,
  updateTicket,
} from "./ticket.service.js";

const route = Router();

route.post("/create-ticket", async (req, res) => {
  console.log(req);
  /* #swagger.tags = ["Ticket"];
    #swagger.summary = "Create a new ticket.";
    #swagger.method = "POST";
    #swagger.parameters['Request Body'] = {
                in: 'body',
                required: true, 
                schema: { $ref: "#/definitions/CreateTicketModel" }
            }
    #swagger.responses[200] = {
      schema: {
        message: "Ticket created successfully",
        success: true,
      },
    }; */
  await createNewTicket(req, res);
});

route.get("/get-all-ticket", async (req, res) => {
   /* #swagger.tags = ["Ticket"];
    #swagger.summary = "Get all ticket.";
    #swagger.responses[200] = {
      schema: {
        message: "Ticket data fetched successfully",
        success: true,
        data: [],
      },
    }; */
  await getAllTicket(req, res);
});

route.patch("/update-ticket/:id", async (req, res) => {
 /* #swagger.tags = ["Ticket"];
    #swagger.summary = "Update a ticket.";
    #swagger.method = "PATCH";
    #swagger.parameters['Request Body'] = {
                in: 'body',
                required: true, 
                schema: { $ref: "#/definitions/UpdateTicketModel" }
            }
    #swagger.responses[200] = {
      schema: {
        message: "User updated successfully",
        success: true,
      },
    }; */
  await updateTicket(req, res);
});

route.delete("/delete-ticket/:id", async (req,res) => {
    /* #swagger.tags = ["Ticket"];
    #swagger.summary = "Delete a ticket.";
    #swagger.method = "DELETE";
    #swagger.parameters['id'] = { in: 'path', required: true, schema: { type: 'string' } };
    #swagger.responses[200] = {
      schema: {
        message: "Ticket deleted successfully",
        success: true,
      },
    }; */
    await deleteTicket(req,res);
});
export default route;
