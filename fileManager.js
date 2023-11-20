const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'employees.json');

function readData() {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}

function getEmployees() {
  return readData();
}

function getEmployeeById(id) {
  const employees = readData();
  return employees.find(emp => emp.id === id);
}

function addEmployee(employee) {
  const employees = readData();
  employees.push(employee);
  writeData(employees);
}

function updateEmployee(id, newEmployeeData) {
  const employees = readData();
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees[index] = {...employees[index], ...newEmployeeData};
    writeData(employees);
  }
}

function deleteEmployee(id) {
  let employees = readData();
  employees = employees.filter(emp => emp.id !== id);
  writeData(employees);
}

module.exports = { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee };
