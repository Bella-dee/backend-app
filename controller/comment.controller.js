import { Router } from "express";
import { getComment, getCommentEmail, getCommentName,getCommentBody } from "../services/comment.service.js";

const route = Router();

route.get("/get-comment", async (req,res) => {
    await getComment(req,res);
});

route.get("/get-single-user-comment-name/:id", async (req,res) => {
    await getCommentName(req,res);
});

route.get("/get-single-user-comment-email/:id", async (req,res) => {
    await getCommentEmail(req,res);
});

route.get("/get-single-user-comment-body/:id", async (req,res) => {
await getCommentBody(req,res);
});
export default route;