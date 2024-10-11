import express from "express";
import session from "express-session";
import viewEngine from "./config/viewEngine";
import configCors from "./config/cors";
import connectDB from "./config/connectDB";
import initEbRouter from "./routes/route";
import bodyParser from "body-parser";

require("dotenv").config();

const app = express();

configCors(app);

viewEngine(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false, // Không lưu session nếu không thay đổi
    saveUninitialized: false, // Không lưu session rỗng
    cookie: { secure: false },
  })
);

initEbRouter(app);

connectDB();

const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
