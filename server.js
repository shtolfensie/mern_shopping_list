const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

const items = require("./routes/api/items");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// conect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Use routes
app.use("/api/items", items);

// Serve static assests if in prod
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
