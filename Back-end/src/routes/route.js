import express from "express";
import homeController from "../controllers/homeController";
import { checkLogin, isAuthenticated } from "../middleware/actions";

let router = express.Router();

let initEbRouter = (app) => {
  router.get("/", isAuthenticated, homeController.getHome);
  router.get("/login", checkLogin, homeController.getLogin);
  router.get("/logout", homeController.getLogout);
  router.get("/register", homeController.getRegister);
  router.get("/view-students", homeController.getViewStudens);
  //router.get("/edit-students", homeController.getEditStudens);

  router.post("/login", homeController.postLogin);
  router.post("/register", homeController.postRegister);

  return app.use("/", router);
};

export default initEbRouter;
