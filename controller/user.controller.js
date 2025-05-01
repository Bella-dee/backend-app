import { Router } from "express";
import {
  getUsers,
  getSingleUser,
  getUserFullName,
  getUserUserName,
  getUserEmail,
  getUserStreet,  
  getUserPhone,
  getUserAddress,
  getUserCity,
  getUserWebsite,
  getUserCompanyName,
  getUserCatchPhrase,
  getUserBs,
} from "../services/user.service.js";

const route = Router();

route.get("/get-users", async (_req, res) => {
  await getUsers(res);
});

route.get("/get-single-user/:id", async (req, res) => {
  await getSingleUser(req, res);
});

route.get("/get-single-user-fullname/:id", async (req, res) => {
  await getUserFullName(req, res);
});

route.get("/get-single-user-username/:id", async (req,res) => {
  await getUserUserName(req, res);
});

route.get("/get-single-user-email/:id", async (req,res) => {
  await getUserEmail(req,res);
});

route.get("/get-single-user-street/:id", async (req,res) => {
  await getUserStreet(req,res);
});

route.get("/get-single-user-phone/:id", async (req,res) => {
  await getUserPhone(req,res);
});

route.get("/get-single-user-address/:id", async (req,res) => {
  await getUserAddress(req,res);
});

route.get("/get-single-user-city/:id", async (req,res) => {
  await getUserCity(req,res);
});

route.get("/get-single-user-website/:id", async (req,res) => {
  await getUserWebsite(req,res);
});

route.get("/get-single-user-companyName/:id", async (req,res) =>{
  await getUserCompanyName(req,res);
});

route.get("/get-single-user-catchPhrase/:id", async (req,res) => {
  await getUserCatchPhrase (req,res);
});

route.get("/get-single-user-bs/:id", async (req,res) => {
  await getUserBs (req,res);
});
export default route;
