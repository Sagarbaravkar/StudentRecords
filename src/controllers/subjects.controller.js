const { Subjects } = require("../models/subject.model");

const subjectsController = {
  list: async (req, res) => {
    try {
      const response = {};

      const data = await Subjects.findAll({});
      response["data"] = data;

      return res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  getSubjectById: async (req, res) => {
    try {
      const response = {};
      const { subjectId } = req.params;
      const data = await Subjects.findByPk(subjectId);

      if (!data) {
        return res.status(400).json({ message: "Subject not found" });
      }

      response["data"] = data;
      return res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  create: async (req, res) => {
    try {
      const record = await Subjects.create(req.body);
      res.status(201).json(record);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  update: async (req, res) => {
    try {
      const { subjectId } = req.params;
      const data = req.body;

      const record = await Subjects.findByPk(subjectId);

      if (!record) {
        return res.status(400).json({ message: "Subject Not found" });
      }

      await Subjects.update(data, { where: { id: subjectId } });
      res.status(200).json({ message: "Record Updated Successfully" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  delete: async (req, res) => {
    try {
      const { subjectId } = req.params
      const record = await Subjects.findByPk(subjectId);
      if(!record){
        return res.status(404).json({message:"Subject Not found , Please enter correct SubjectId"});
      }

      await Subjects.destroy({where: {id:subjectId}});
      res.status(200).json({message:"record deleted Successfully"})
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = subjectsController;
