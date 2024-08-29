const { Students } = require("../models/students.model");

const studentsController = {
  list: async (req, res) => {
    try {
      let response = {};

      const data = await Students.findAll({});

      response["data"] = data;

      return res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getStudentById: async (req, res) => {
    try {
      let response = {};
      const { studentId } = req.params;

      const data = await Students.findByPk(studentId);

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
      const data = await Students.create(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { studentId } = req.params;
      console.log(studentId);

      const record = await Students.findByPk(studentId);

      if (!record) {
        return res
          .status(404)
          .json({ message: `student not found for studentId ${studentId}` });
      }

      await Students.update(data, { where: { id: studentId } });
      return res.status(200).json({ message: "Record Updated Successfully" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { studentId } = req.params;

      const data = await Students.findByPk(studentId);

      if (!data) {
        return res.status(400).json({ message: "Studenst Record Not Found" });
      }

      await Students.destroy({ where: { id: studentId } });
      return res.status(200).json({ message: "Record Deleted SuccessFully " });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getstudentDetails: async (req, res) => {
    try {
      const response = {};
      const { studentId } = req.body;

      const data = await Students.findAll({
        where: {
          id: studentId,
        },
      });

      response["message"] = "Students not found.";

      if (data) {
        response["message"] = "Record retrieved successfully.";

        response["data"] = data;
      }

      const foundStudentIds = data.map((student) => student.id);

      const notFoundIds = studentId.filter(
        (id) => !foundStudentIds.includes(id)
      );

      if (notFoundIds.length > 0) {
        response["Student Id Not Found"] = notFoundIds;
        response["message"] = "Some students not found.";
      }

      res.status(200).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = studentsController;
