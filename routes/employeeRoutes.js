
const express = require('express');
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require('../fileManager');
const router = express.Router();


router.get('/', (req, res) => {
  const employees = getEmployees();
  res.json(employees);
});


router.get('/:id', (req, res) => {
  const employee = getEmployeeById(req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send('Employee not found');
  }
});


router.post('/', (req, res) => {
  addEmployee(req.body);
  res.status(201).send('Employee added successfully');
});


router.put('/:id', (req, res) => {
  updateEmployee(req.params.id, req.body);
  res.send('Employee updated successfully');
});


router.delete('/:id', (req, res) => {
  deleteEmployee(req.params.id);
  res.send('Employee deleted successfully');
});

module.exports = router;
