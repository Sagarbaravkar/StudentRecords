const gradeServices = require("../services/grade.service");

const gradeController = {
  getGrade: async (req, res) => {
    try {
      const data = await gradeServices.gradelist();
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send('Error reading the JSON file');
    }
  },
};

module.exports = gradeController;
