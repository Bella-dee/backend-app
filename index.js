import express from "express";
import routes from "./Routes/index.js";

const PORT = 8000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// Service ====> Controller ===> Route ===> App

// Service is the business logic of the app
// Controller is the middleman between the service and the route. It handles the request and response. Also a subroute of the route
// Route is the endpoint of the app

// base route is http://localhost:8000
// text after base route is called route endpoint eg: http://localhost:8000/users
// text after route endpoint is called route parameter eg: http://localhost:8000/users/1
// text after route parameter is called route query parameter eg: http://localhost:8000/users/1?name=John
