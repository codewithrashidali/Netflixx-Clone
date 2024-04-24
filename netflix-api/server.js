const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");


const app = express();

app.use(cors());
app.use(express.json());

const url = "mongodb+srv://rashidali:rashid12345@cluster0.ju8cbzd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url).then((res)=>console.log('Data base connected succesfully')).catch((err)=>console.log('Database not connected'))

app.use("/api/user", userRoutes);

app.listen(5000, ()=>console.log("server started"));