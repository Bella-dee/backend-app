import { Router } from "express";

import { createNewUser } from "./user.service.js";

const route = Router();

route.post("/create-user", async (req, res) => {
  await createNewUser(req, res);
});
route.post

export default route;
