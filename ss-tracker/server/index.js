const express = require("express");
const app = express();
const cors  = require("cors");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/connection");

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});