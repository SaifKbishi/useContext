const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
const courseRoutes = require('./src/routes/course.routes');
app.use('/v1', courseRoutes);
const userRoutes = require('./src/routes/user.routes');
app.use('/v1', userRoutes);

require('./src/config/mongoose'); 

app.get("/", (req, res) => {
 res.json({ message: "Welcome to from the server." });
});

const PORT = process.env.PORT || 3009; //this must be the same as in the client package.json =>   "proxy":"http://localhost:3014/",
app.listen(PORT, () => {
 console.log(`Server is up and listening to PORT: ${PORT}`);
});