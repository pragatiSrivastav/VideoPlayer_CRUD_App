const connectToMongo = require("./db");

const express = require("express");
const cors = require("cors");

connectToMongo();
const router = require("./routers/routes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.listen(port, () => {
  console.log(`Application is listening at port ${port} `);
});
