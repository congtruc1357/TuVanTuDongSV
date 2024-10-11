import express from "express";
import homeController from "../controllers/homeController";
import { checkLogin, isAuthenticated } from "../middleware/actions";

let router = express.Router();

let initEbRouter = (app) => {
  router.get("/", isAuthenticated, homeController.getHome);
  router.get("/login", checkLogin, homeController.getLogin);
  router.get("/logout", homeController.getLogout);
  router.get("/register", homeController.getRegister);

  router.post("/login", homeController.postLogin);
  router.post("/register", homeController.postRegister);
  /*router.get("/register", homeController.getRegister);
  //router.get("/login", homeController.getLogin);
  router.get("/views-student", homeController.getViewStudens);

  router.post("/login", homeController.postLogin);*/

  return app.use("/", router);
};

export default initEbRouter;
