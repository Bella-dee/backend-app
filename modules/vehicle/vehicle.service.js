import { uuidv7 } from "uuidv7";0
import { VehicleModel } from "../../models/vehicleModel.js";

export const createNewVehicle = async (req, res) => {
  try {
    const {
      plateNumber,
      color,
      model,
      brand,
      type,
      // tickets,
      // owner,
    } = req.body;

    // Check if a vehicle with the same plate number already exists
    const existingVehicle = await VehicleModel.findOne({ plateNumber });
    if (existingVehicle) {
      return res
        .status(409)
        .json({ message: "Vehicle with this plate number already exists" });
    }

    const newVehicle = new VehicleModel({
      id: uuidv7(),
      plateNumber,
      color,
      model,
      brand,
      type,
      // tickets,
      // owner,
    });

    await newVehicle.save();

    return res.status(201).json({
      message: "New vehicle created successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllVehicle = async (req, res) => {
  try {
    const vehicles = await VehicleModel.find(
      {},
      { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }
    );

    return res.status(200).json({
      message: "Vehicles fetched successfully",
      vehicles,
    });
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSingleVehicle = async (req, res) => {
  try {
    const { plateNumber } = req.body;

    const vehicle = await VehicleModel.findOne(
      { plateNumber },
      { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 }
    );

    return res.status(200).json({
      message: "Vehicle fetched successfully",
      vehicle,
    });
  } catch (error) {
    console.error("Error fetching vehicle:", error); // Fixed typo
    return res.status(500).json({
      message: "Failed to fetch vehicle",
      error: error.message,
    });
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const { plateNumber, color, model, brand, type } = req.body;

    const updatedVehicle = await VehicleModel.findOneAndUpdate(
      { plateNumber },
      { color, model, brand, type },
      { new: true, projection: { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 } }
    );

    if (!updatedVehicle) {
      return res.status(404).json({
        message: "Vehicle not found",
      });
    }

    return res.status(200).json({
      message: "Vehicle updated successfully",
    });
  } catch (error) {
    console.error("Error updating vehicle:", error);
    return res.status(500).json({
      message: "Failed to update vehicle",
      error: error.message,
    });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const { plateNumber } = req.body;

    const deletedVehicle = await VehicleModel.findOneAndDelete(
      { plateNumber }
    );

    if (!deletedVehicle) {
      return res.status(404).json({
        message: "Vehicle not found",
      });
    }

    return res.status(200).json({
      message: "Vehicle deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    return res.status(500).json({
      message: "Failed to delete vehicle",
      error: error.message,
    });
  }
};
