import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { apiRouter } from "./routes/index.js";


const app = express();
app.use(express.json())
app.use(cookieParser())
const port = 3000;

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("test");
});


app.use("/api", apiRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});




//http://localhost:3000/api/courses/create-course



//http://localhost:3000/api/user/signup
//http://localhost:3000/api/user/login
//http://localhost:3000/api/user/profile
//http://localhost:3000/api/user/edit-profile



//http://localhost:3000/api/mentor/signup
//http://localhost:3000/api/mentor/login
//http://localhost:3000/api/mentor/profile
//http://localhost:3000/api/mentor/edit-profile