// const express = require("express");
// const app = express();
// const multer = require("multer");
// require("dotenv").config();
// const path = require("path");
// const port = process.env.PORT || 3000;
// const cors = require("cors");
// const routes = require("./routes/index");
// const DbConnect = require("./db/connect");
// const userRoutes = require("./routes/user");

// const storage = multer.memoryStorage(); // This keeps the data in memory
// const upload = multer({ storage: storage });

// app.use(cors());
// app.use(express.json());
// app.use(routes);
// app.use(express.json());
// app.use("/user", upload.none(), userRoutes);
// app.use(express.static(path.join(__dirname, "../build")));
// app.get("*", function (_, res) {
//   res.sendFile(path.join(__dirname, "../build/index.html"), function (err) {
//     res.status(500).send(err);
//   });
// });

// DbConnect();

// app.get("/", (req, res) => {
//   res.send({ title: "Connect" });
// });

// const connectdb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL);
//     console.log("Connect : ${conn.connection.host}");
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// connectDB().then(() => {
//   app.listen(port, () => {
//     console.log("listening on port " + port);
//   });
// });
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

// app.listen(port, () => {
//   console.log(`Server is listening on Port:${port}..`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/index");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
app.use("/users", userRouter);
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect : ${conn.connection.host}");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
app.get("/", (req, res) => {
  res.send({ title: "Connect" });
});
connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening on port " + port);
  });
});
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
