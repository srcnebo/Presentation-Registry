const express = require('express');
const studentRouter = express.Router();
const {
  showStudents,
  showSingleStudent,
  addStudent,
  editStudent,
  deleteStudent
} = require('../controller/students.controller');

studentRouter.get('/students', showStudents);
studentRouter.get('/students/:id', showSingleStudent);
studentRouter.post('/students', addStudent);
studentRouter.put('/students/:id', editStudent);
studentRouter.delete('/students/:id', deleteStudent);

module.exports = studentRouter;
