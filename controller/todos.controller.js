import {Router} from "express";
import{
 getTodos,

} from "../services/todos.service.js";

const route = Router ();

route.get("get-todos", async (req,res) => {
    await getTodos(req,res);
});

export default route;