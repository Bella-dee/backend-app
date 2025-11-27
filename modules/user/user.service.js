import { UsersModel } from "../../models/userModel.js";
import { uuidv7 } from "uuidv7";
import handleResponse from "../../utils/index.js";

export const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, address, lga } = req.body;

    const newUser = new UsersModel({
      id: uuidv7(),
      userId: uuidv7(),
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
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const { firstname, lastName, address, lga } = req.body;

    const updatedVehicle = await UsersModel.findOneAndUpdate(
      { userId },
      { firstname, lastName, address, lga },
      { new: true, projection: { _id: 0, __v: 0 } }
    );

    if (!updatedVehicle) {
      return res.status(404).json({
        message: " User not found  ",
      });
    }

    return res.status(200).json({
      message: "User updated sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getAllUSers = async (_req, res) => {
  try {
    const allUsers = await UsersModel.find(
      {},
      { _id: 0, id: 0, __v: 0, _createdAt: 0, _updatedAt: 0 }
    );
    if (!allUsers) {
      return handleResponse(res, 200, "No User found", {
        success: true,
        data: [],
      });
    }
    return handleResponse(res, 200, "Users data fetched successfully", {
      success: true,
      data: allUsers,
    });
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal server error", {
      success: false,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return handleResponse(res, 400, "Missing required field: userId", {
        success: false,
      });
    }
    const userToDelete = await UsersModel.findOneAndDelete(
      { userId: userId },
      {
        options: { new: true },
      }
    );

    if (!userToDelete) {
      return handleResponse(res, 404, "User not found", { success: false });
    }
    return handleResponse(res, 200, "User deleted successfully", {
      success: true,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    return handleResponse(res, 500, "Internal server error", {
      success: false,
    });
  }
};

// try{}catch(error){}
