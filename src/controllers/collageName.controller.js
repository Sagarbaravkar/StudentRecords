const collagenameServices = require("../services/collageName.service");

const collageNameController = {
  getCollageName: async (req, res) => {
    try {
      const data = await collagenameServices.list();
      console.log("data", data);
      res.send(data);
    } catch (error) {
      res.status(500).send('Error reading the JSON file');
    }
  },
};

module.exports = collageNameController;
