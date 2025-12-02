import {Router} from "express";
import {
 getPhotos,  
getPhotoTitle,
getPhotoUrl,
getThumbNailUrl,

} from "../services/photos.service.js";

const route = Router();

route.get("/get-photos", async (req,res) => {
     /* #swagger.tags = ["Photos"];
     #swagger.summary = "Get all photo.";
     #swagger.responses[200] = {
       schema: {
         message: "Photos data fetched successfully",
         success: true,
         data: [],
       },
     }; */
 await getPhotos(req,res);   
});

route.get("/get-single-user-photo-title/:id", async (req,res) => {
    await getPhotoTitle(req,res);
});

route.get("/get-single-user-photo-url/:id", async (req,res) => {
    await getPhotoUrl(req,res);
});

route.get("/get-single-user-photo-thumbNailUrl/:id", async (req,res) => {
    await getThumbNailUrl(req,res);
});
export default route;