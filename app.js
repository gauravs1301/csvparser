const express = require("express");
const path = require("path");
const csvRoutes = require("./routes/csvRoutes");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", csvRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
