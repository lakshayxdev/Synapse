
const dotenv = require("dotenv");
dotenv.config();
const express=require("express");
const cors=require("cors");
const authRoutes=require("./routes/authRoutes");
const noteRoutes=require("./routes/noteRoutes");

const connectDB=require("./config/db");

connectDB();

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req,res) => {
    res.send("NoteStack API is running");
});

const PORT=process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});
