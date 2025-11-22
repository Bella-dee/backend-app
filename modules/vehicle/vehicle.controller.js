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
  await createNewVehicle (req , res);
});

route.get("/get-all-vehicles", async (req,res ) => {
  await getAllVehicle (req,res);
});

route.get("/get-single-vehicle/:plateNumber", async (req,res) => {
  await getSingleVehicle(req,res);
});

route.get("/get-single-vehicle", async (req,res) => {
  await getSingleVehicle(req,res);
});

route.put("/update-vehicle", async (req,res) => {
  await updateVehicle(req,res);
});

route.delete("/delete-vehicle", async (req,res) => {
  await deleteVehicle(req,res);
});

export default route;