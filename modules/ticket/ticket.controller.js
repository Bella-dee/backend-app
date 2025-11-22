import { Router } from "express";

import {
  createNewTicket,
  deleteTicket,
  getAllTicket,
  updateTicket,
} from "./ticket.service.js";

const route = Router();

route.post("/create-ticket", async (req, res) => {
  await createNewTicket(req, res);
});

route.get("/get-all-ticket", async (req, res) => {
  await getAllTicket(req, res);
});

route.put("/update-ticket", async (req, res) => {
  await updateTicket(req, res);
});

route.delete("/delete-ticket", async (req,res) => {
    await deleteTicket(req,res);
});
export default route;
