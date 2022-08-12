const express = require("express");
const htmlRoute = require("./routes/htmlRoutes");

const PORT = 4005;
const app = express();

app.use(express.json()); // accept json data via server
app.use(express.urlencoded({ extended: true })); // enables server to accept url params
app.use(express.static("public"));

app.use(htmlRoute);

app.listen(PORT, () => {
  console.log("App listening on port: ", PORT);
});
