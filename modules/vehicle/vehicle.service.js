import { uuidv7 } from "uuidv7";0
import { VehicleModel } from "../../models/vehicleModel.js";
import handleResponse from "../../utils/index.js";

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
    const allVehicle = await VehicleModel.find(
      {},
      { _id: 0, __v:   0, updatedAt: 0 }
    );

    
    if (!allVehicle) {
    return handleResponse(res, 200, "No vehicle found", {
      success: true,
      data: {},
    });
    }
    return handleResponse(res, 200, "Vehicle data fetched successfully", {
      success: true,
      data: allVehicle
    });
  } catch (error) {
    console.log( error);
    return handleResponse(res, 500, "Internal server error", {
      success: false,
    });
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
   const  { id } = req.params;
    const { plateNumber, color, model, brand, type } = req.body;

    if (!id) {
      return handleResponse(res, 400, "Missing required field: Id", {
        success: false,
      });
    }

    const updatedVehicle = await VehicleModel.findOneAndUpdate(
      { id },
      { color, model, brand, type, updated_at: new Date() },
      { new: true, projection: { _id: 0, __v: 0, createdAt: 0 } }
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
    console.log(error);
    return res.status(500).json({ message: error});
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id ) {
      return handleResponse(
        res,
        400,
        "Missing required field: platenumber",
        {
          success: false,
        }
      );
    }

    const vehicleToDelete = await VehicleModel.findOneAndDelete(
      { id: id },
      {
        options: { new: true},
      }
    );

    if (!vehicleToDelete) {
      return handleResponse(res, 400, "Vehicle not found", {success: false });
    }
return handleResponse(res, 200, "Vehicle deleted sucessfully", {
success: true,
});
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    return handleResponse(res, 200, "Internal server error", {
success: false,
    }); 
  }
};
