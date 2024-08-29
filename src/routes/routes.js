const express = require("express");
const router = express.Router();
const customerTypeController = require("./../controllers/collageName.controller");
const gradeTypeController = require("./../controllers/grade.controller");
const courseController = require("../controllers/course.controller");
const studentsController = require("../controllers/students.controller");
const subjectController = require("../controllers/subjects.controller");

router.get("/collagename", customerTypeController.getCollageName);
router.get("/grade", gradeTypeController.getGrade);
router.get("/course/list", courseController.list);
router.get("/course/:courseId", courseController.getCourseById);
router.post("/course/create", courseController.create);
router.put("/course/:courseId", courseController.update);
router.delete("/course/:courseId", courseController.delete);
router.get("/student/list", studentsController.list);
router.get("/student/:studentId", studentsController.getStudentById);
router.post("/student/create", studentsController.create);
router.put("/student/:studentId", studentsController.update);
router.delete("/student/:studentId", studentsController.delete);
router.get("/subject/list", subjectController.list);
router.get("/subject/:subjectId", subjectController.getSubjectById);
router.post("/subject/create", subjectController.create);
router.put("/subject/:subjectId", subjectController.update);
router.delete("/subject/:subjectId", subjectController.delete);
router.post('/students/studentId', studentsController.getstudentDetails);
router.post('/students/studentId', studentsController.getstudentDetails);
router.post('/students/studentId', studentsController.getstudentDetails);


module.exports = router;
