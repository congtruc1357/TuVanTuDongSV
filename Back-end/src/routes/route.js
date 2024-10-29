import express from "express";
import homeController from "../controllers/homeController";
import courseController from "../controllers/courseController";
import { checkLogin, isAuthenticated } from "../middleware/actions";

let router = express.Router();

let initEbRouter = (app) => {
  router.get("/", isAuthenticated, homeController.getHome);
  router.get("/login", checkLogin, homeController.getLogin);
  router.get("/logout", homeController.getLogout);
  router.get("/register", homeController.getRegister);
  router.get("/view-students", homeController.getViewStudens);
  router.get("/edit-student/:id", homeController.getEditStudent);
  router.get("/view/:id", homeController.getViewUserInformation);

  router.post("/login", homeController.postLogin);
  router.post("/register", homeController.postRegister);
  router.post("/edit-student/:id", homeController.postEditStudent);
  router.post("/delete-student/:id", homeController.deleteStudent);

  //courses
  router.get("/view-courses", courseController.getViewCourses);
  router.get("/edit-course/:id", courseController.getEditCourse);

  router.post("/edit-course/:id", courseController.postEditCourse);
  router.post("/delete-course/:id", courseController.deleteCourse);

  return app.use("/", router);
};

export default initEbRouter;
