import { Schema } from "mongoose";
import mongoose from "mongoose";

const todosSchema = new Schema({
  id: {
    type: String,
  },
  title: {
type: String,
},
description: {
type: String,
},
isCompleted: {
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

export const TodosModel = mongoose.model("Todos", todosSchema);