const fs = require("fs");
const path = require("path");

const gradeServices = {
  gradelist: async () => {
    try {
      const filePath = path.join(__dirname, "../assets/grade.json");
      let data = fs.readFileSync(filePath, "utf8");
      let rows = JSON.parse(data);
      return { rows, total: rows.length };
    } catch (error) {
      throw error;
    }
  },
};

module.exports = gradeServices;
