import { Router } from "express";
import { 
  createNewHouse,
getAllHouse,
updateHouse,
deleteHouse,

 } from "./house.service.js";

 const route = Router();
 
 route.post("/create-house", async (req, res) => {
     console.log(req);
   /* #swagger.tags = ["House"];
     #swagger.summary = "Create a new House.";
     #swagger.method = "POST";
     #swagger.parameters['Request Body'] = {
                 in: 'body',
                 required: true, 
                 schema: { $ref: "#/definitions/HouseModel" }
             }
     #swagger.responses[200] = {
       schema: {
         message: "House created successfully",
         success: true,
       },
     }; */
   await createNewHouse (req , res);
 });
 
 route.get("/get-all-house", async (req,res ) => {
      /* #swagger.tags = ["House"];
     #swagger.summary = "Get all house.";
     #swagger.responses[200] = {
       schema: {
         message: "House data fetched successfully",
         success: true,
         data: [],
       },
     }; */
   await getAllHouse (req,res);
 });
 
 
 
 route.patch("/update-house", async (req,res) => {
    /* #swagger.tags = ["House"];
     #swagger.summary = "Update a house.";
     #swagger.method = "PATCH";
     #swagger.parameters['Request Body'] = {
                 in: 'body',
                 required: true, 
                 schema: { $ref: "#/definitions/UpdateHouseModel" }
             }
     #swagger.responses[200] = {
       schema: {
         message: "House updated successfully",
         success: true,
       },
     }; */
   await updateHouse(req,res);
 });
 
 route.delete("/delete-house", async (req,res) => {  
   /* #swagger.tags = ["House"];
     #swagger.summary = "Delete a house.";
     #swagger.method = "House";
     #swagger.parameters['houseId'] = { in: 'path', required: true, schema: { type: 'string' } };
     #swagger.responses[200] = {
       schema: {
         message: "House deleted successfully",
         success: true,
       },
     }; */
   await deleteHouse(req,res);
 });
 
 export default route;
