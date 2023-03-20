import express from "express";
import colors from "colors";

//rest object
const app = express();

process.env.NODE_ENV = "development"; // or "production"

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to aquabliss</h1>");
});

const port = 8080; // use process.env.PORT if available, otherwise use 8080
app.listen(port, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});

