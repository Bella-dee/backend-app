import { Router } from "express";

import { createNewUser, deleteUser, getAllUSers, updateUserById } from "./user.service.js";

const route = Router();

route.post("/create-user", async (req, res) => {
  await createNewUser(req, res);
});
route.post


route.post("/createUser", async (req, res) => {
  console.log(req);
  /* #swagger.tags = ["User"];
    #swagger.summary = "Create a new user.";
    #swagger.method = "POST";
    #swagger.parameters['Request Body'] = {
                in: 'body',
                required: true, 
                schema: { $ref: "#/definitions/CreateUserModel" }
            }
    #swagger.responses[200] = {
      schema: {
        message: "User created successfully",
        success: true,
      },
    }; */

  await createNewUser(req, res);
});

route.patch("/update-user/:userId", async (req, res) => {
  console.log(req);
  /* #swagger.tags = ["User"];
    #swagger.summary = "Update a new user.";
    #swagger.method = "PATCH";
    #swagger.parameters['Request Body'] = {
                in: 'body',
                required: true, 
                schema: { $ref: "#/definitions/CreateUserModel" }
            }
    #swagger.responses[200] = {
      schema: {
        message: "User updated successfully",
        success: true,
      },
    }; */

  await updateUserById(req, res);
});


route.get("/get-all-users", async (req, res) => {
  /* #swagger.tags = ["User"];
    #swagger.summary = "Get all users.";
    #swagger.responses[200] = {
      schema: {
        message: "Users data fetched successfully",
        success: true,
        data: [],
      },
    }; */

  await getAllUSers(req, res);
});

route.delete("/delete-user/:userId", async (req, res) => {
  /* #swagger.tags = ["User"];
    #swagger.summary = "Delete a user.";
    #swagger.method = "DELETE";
    #swagger.parameters['userId'] = { in: 'path', required: true, schema: { type: 'string' } };
    #swagger.responses[200] = {
      schema: {
        message: "User deleted successfully",
        success: true,
      },
    }; */
  await deleteUser(req, res);
});

export default route;
