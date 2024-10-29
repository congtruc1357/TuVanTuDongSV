import db from "../models";

const getListCourse = async () => {
  const listCourse = await db.models.KhoaHoc.findAll();

  return listCourse;
};

const findCourse = async (id) => {
  const course = await db.models.KhoaHoc.findByPk(id);

  return course;
};

const deleteCourse = async (id) => {
  await db.models.KhoaHoc.destroy({ where: { id: id } });
};

module.exports = {
  getListCourse: getListCourse,
  findCourse,
  deleteCourse,
};
