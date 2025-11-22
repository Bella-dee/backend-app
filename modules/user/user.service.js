
import { UsersModel } from "../../models/userModel.js";
import { VehicleModel } from "../../models/vehicleModel.js";
import { updateVehicle } from "../vehicle/vehicle.service.js";

export const createNewUser = async (req, res) => {
  try {
    const {
      id,
      userId,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      lga,
    } = req.body;

    const newUser = new UsersModel({
      id,
      userId,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      lga,
    });

    if (!email) {
      throw new error("Email is required");
    }

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully", user: newUser});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserById = async (req,res) => {
  try{
      const { userId, firstname, lastName, address, lga } = req.body;

    const updatedVehicle = await VehicleModel.findOneAndUpdate(
       { userId },
       { firstname, lastName, address, lga },
       {new: true, projection: {_id: 0, __v: 0, }}
    );

if (!updateVehicle) {
  return res.status(404).json({
    message: " User not found  ",
  });
}

return res.status(200).json({
  message: "User updated sucessfully",
});
  } catch(error){
    console.log(error)
        return res.status(500).json({ message: error });
  }
};


// try{}catch(error){}