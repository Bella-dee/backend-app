import { uuidv7 } from "uuidv7";
import { HouseModel } from "../../models/houseModel.js";
import handleResponse from "../../utils/index.js";

export const createNewHouse = async (req, res) => {
  try {
    const {
        houseNumber,
        street,
        city,
        stste,
        country,
        houseType,
        numberOfOccupants,
    } =req.body;

    const newHouse= new HouseModel({
id: uuidv7(),
houseNumber,
        street,
        city,
        stste,
        country,
        houseType,
        numberOfOccupants,
        created_at: new Date(),
      status: 'pending',
    });

    await newHouse.save();

    return res
      .status(201)
      .json({ message: " New House created succesfully", house: newHouse });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server error" });
  }
};
 
export const getAllHouse = async (_req, res) => {
  try {
    const allHouse= await HouseModel.find(
      {},
      { _id: 0, __v: 0, updatedAt: 0 }
    );

    if (!allHouse) {
      return handleResponse(res, 200, "No House Found", {
        success: true,
        data: {},
      });
    }
    return handleResponse(res, 200, "House data fetched successfully", {
      success: true,
      data: allHouse,
    });
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal server error", {
      success: false,
    });
  }
};

export const updateHouse = async (req, res) => {
  try {
    const { id } = req.params;
    const { fees, status } = req.body;

    if (!id) {
      return handleResponse(res, 400, "Missing required field: id", {
        success: false,
      });
    }

    const updatedHouse = await HouseModel.findOneAndUpdate(
      { id },
      { houseNumber, street, city, state, updated_at: new Date() },
      { new: true, projection: { _id: 0, __v: 0, createdAt: 0 } }
    );

    if (!updatedHouse) {
      return res.status(404).json({
        message: " House not found",
      });
    }

    return res.status(200).json({
      message: "House updated sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return handleResponse(
        res,
        400,
        "Missing required field: houseNumber",
        {
          success: false,
        }
      );
    }
    const houseToDelete = await HouseModel.findOneAndDelete(
      { id: id },
      {
        options: { new: true },
      }
    );

    if (!houseToDelete) {
      return handleResponse(res, 404, "House not found", { success: false });
    }
    return handleResponse(res, 200, "House deleted sucessfully", {
      success: true,
    });
  } catch (error) {
    console.error("Error deleting House:", error);
    return handleResponse(res, 200, "Internal server error", {
      sucess: false,
    });
  }
};
