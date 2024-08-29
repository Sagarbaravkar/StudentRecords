const { Course } = require("../models/course.model");

const courseController = {
  list: async (req, res) => {
    try {
      const data = await Course.findAll({});

      const response = {};

      response["data"] = data;
      return res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCourseById: async (req, res) => {
    try {
      const { courseId } = req.params;

      const response = {};

      const data = await Course.findByPk(courseId);

      response["message"] = "Course not found.";

      if (data) {
        response["message"] = "Record retrieved successfully.";
        response["data"] = data;
      }

      return res.status(200).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  create: async (req, res) => {
    try {
      const record = await Course.create(req.body);
      res.status(201).json(record);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { courseId } = req.params;
      const data = req.body;

      const record = await Course.findByPk(courseId);

      if (!record) {
        return res.status(404).json({ message: "course not found" });
      }

      await Course.update(data, { where: { id: courseId } });

      return res.status(200).json({ message: "Record Updated Successfully" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { courseId } = req.params;

      const data = await Course.findByPk(courseId);

      if (!data) {
        return res.status(404).json({ message: "Studenst Record Not Found " });
      }

      await Course.destroy({ where: { id: courseId } });

      return res.status(200).json({ message: "Records Deleted successfully" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = courseController;
