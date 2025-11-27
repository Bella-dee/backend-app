import { Router } from "express";
// import userController from "../controller/user.controller.js";
import albumController from "../controller/albums.controller.js";
import commentController from "../controller/comment.controller.js";
import photoController from "../controller/photo.controller.js"
import todosController from "../controller/todos.controller.js";
import userController from "../modules/user/user.controller.js"
import vehicleController from "../modules/vehicle/vehicle.controller.js"
import ticketController from "../modules/ticket/ticket.controller.js"
import houseController from "../modules/house/house.controller.js"
const routes = Router();

routes.use("/users", userController);
routes.use("/albums", albumController);
routes.use("/comment", commentController);
routes.use("/photo", photoController);
routes.use("/todos", todosController);
routes.use("/vehicle", vehicleController)
routes.use("/ticket",ticketController)
routes.use("/house",houseController)
export default routes;
