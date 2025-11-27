import { Router } from "express";
import { 
  createNewVehicle,
getAllVehicle,
getSingleVehicle,
updateVehicle,
deleteVehicle,

 } from "./vehicle.service.js";


const route = Router();

route.post("/create-vehicle", async (req, res) => {
    console.log(req);
  /* #swagger.tags = ["Vehicle"];
    #swagger.summary = "Create a new Vehicle.";
    #swagger.method = "POST";
    #swagger.parameters['Request Body'] = {
                in: 'body',
                required: true, 
                schema: { $ref: "#/definitions/CreateVehicleModel" }
            }
    #swagger.responses[200] = {
      schema: {
        message: "Vehicle created successfully",
        success: true,
      },
    }; */
  await createNewVehicle (req , res);
});

route.get("/get-all-vehicles", async (req,res ) => {
     /* #swagger.tags = ["Vehicle"];
    #swagger.summary = "Get all vehicle.";
    #swagger.responses[200] = {
      schema: {
        message: "Vehicle data fetched successfully",
        success: true,
        data: [],
      },
    }; */
  await getAllVehicle (req,res);
});

route.get("/get-single-vehicle/:plateNumber", async (req,res) => {
  await getSingleVehicle(req,res);
});

route.get("/get-single-vehicle", async (req,res) => {
  await getSingleVehicle(req,res);
});

route.patch("/update-vehicle", async (req,res) => {
   /* #swagger.tags = ["Vehicle"];
    #swagger.summary = "Update a vehicle.";
    #swagger.method = "PATCH";
    #swagger.parameters['Request Body'] = {
                in: 'body',
                required: true, 
                schema: { $ref: "#/definitions/UpdateVehicleModel" }
            }
    #swagger.responses[200] = {
      schema: {
        message: "Vehicle updated successfully",
        success: true,
      },
    }; */
  await updateVehicle(req,res);
});

route.delete("/delete-vehicle", async (req,res) => {  
  /* #swagger.tags = ["Vehicle"];
    #swagger.summary = "Delete a vehicle.";
    #swagger.method = "Vehicle";
    #swagger.parameters['vehicleId'] = { in: 'path', required: true, schema: { type: 'string' } };
    #swagger.responses[200] = {
      schema: {
        message: "Vehicle deleted successfully",
        success: true,
      },
    }; */
  await deleteVehicle(req,res);
});

export default route;