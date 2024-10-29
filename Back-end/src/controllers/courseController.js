import courseService from "../service/courseService";

const getViewCourses = async (req, res) => {
  try {
    if (!req.session.id) {
      return res.redirect("/login");
    }
    const tenNguoiDung = await req.session.user.tenNguoiDung;

    const DSKhoaHoc = await courseService.getListCourse();

    res.render("view-courses", { tenNguoiDung, DSKhoaHoc });
  } catch (e) {
    console.log("Lỗi lấy danh sách sinh viên: ", e);
    res.status(500).send("Lỗi lấy danh sách sinh viên");
  }
};

// Tìm khóa học
const getEditCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await courseService.findCourse(courseId);

    if (!course) return res.status(404).send("Không tìm thấy khóa học");

    res.render("edit-course", { course });
  } catch (e) {
    console.log("Lỗi tìm khóa học: ", e);
    res.status(500).send("Error find course.");
  }
};

// Chỉnh sửa khóa học
const postEditCourse = async (req, res) => {
  const courseId = req.params.id;
  const { tenKhoaHoc, moTa } = req.body;

  try {
    const course = await courseService.findCourse(courseId);
    if (!course) return res.status(404).send("Không tìm thấy khóa học.");

    await course.update({
      tenKhoaHoc: tenKhoaHoc,
      moTa: moTa,
    });

    res.redirect("/view-courses");
  } catch (e) {
    console.log("Lỗi update thông tin Khóa học: ", e);
    res.status(500).send("Lỗi server.");
  }
};

const deleteCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await courseService.findCourse(courseId);
    if (!course) return res.status(404).send("Không tìm thấy khóa học.");

    await courseService.deleteCourse(course.id);

    res.redirect("/view-courses");
  } catch (e) {
    console.log("Lỗi xóa khóa học: ", e);
    res.status(500).send("Error delete course.");
  }
};

module.exports = {
  getViewCourses: getViewCourses,
  getEditCourse,
  postEditCourse,
  deleteCourse,
};
