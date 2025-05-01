import {Router} from "express";
import {
 getPhotos,  
getPhotoTitle,
getPhotoUrl,
getThumbNailUrl,

} from "../services/photos.service.js";

const route = Router();

route.get("/get-photos", async (req,res) => {
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