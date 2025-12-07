import { Schema } from "mongoose";
import mongoose from "mongoose";

const photosSchema = new Schema({
    id: {
      type: String,  
    },
    title: {
    type: String,
},
url: {
    type: String,
},
thumbnailUrl: {
    type: String,
},
createdAt: {
    type: String,
},
owner:{
  type: Schema.Types.ObjectId,  
ref: "User",
}
});

export const PhotosModel= mongoose.model("Photos", photosSchema);