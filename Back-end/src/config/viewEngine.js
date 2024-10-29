import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./src/views/styles"));
  app.use("/modules", express.static(__dirname + "/node_modules"));
  app.set("view engine", "ejs");
  app.set("views", "./src/views");
};

export default configViewEngine;
