const express = require('express');
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require('./fileManager');
const employeeRoutes = require('./routes/employeeRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/employees', employeeRoutes);

app.get('/employees', (req, res) => {
  try {
    const employees = getEmployees();
    res.json(employees);
  } catch (err) {
    res.status(500).send('Error reading employee data');
  }
});

app.post('/employees', (req, res) => {
  try {
    addEmployee(req.body);
    res.status(201).send('Employee added successfully');
  } catch (err) {
    res.status(500).send('Error adding employee');
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
