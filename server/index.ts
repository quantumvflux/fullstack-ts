import express from "express";
const app = express();
import routes from "./api/routes";

app.use("/api/", routes);

app.listen(3000, () => console.log("Server running on port", 3000));
