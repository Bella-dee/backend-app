import { Router } from "express";
import {
  getTodos,
  getTodosCompleted,
  getTodosTitle,
} from "../services/todos.service.js";

const route = Router();

route.get("/get-todos", async (req, res) => {
  /* #swagger.tags = ["Todo"];
     #swagger.summary = "Get all todo.";
     #swagger.responses[200] = {
       schema: {
         message: "Todo data fetched successfully",
         success: true,
         data: [],
       },
     }; */
  await getTodos(req, res);
});

route.get("/get-single-user-todos-title", async (req, res) => {
  await getTodosTitle(req, res);
});

route.get("/get-single-user-completed", async (req, res) => {
  await getTodosCompleted(req, res);
});
export default route;
