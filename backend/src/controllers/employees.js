import Team from "../models/Team.js";
import Employee from "../models/Employee.js";

export const addEmployee = async (req, res) => {
  try {
    const teamID = req.params.id;
    const employee = new Employee({
      ...req.body,
    });
    await Team.findByIdAndUpdate(teamID, {
      $push: { employees: employee },
    });
    res.status(201).send({ message: "Employee created successfully" });
  } catch (error) {
    res.status(500).send({ data: {}, error: true, message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const teamID = req.params.id;
    const employeeID = req.params.employeeID;
    const team = await Team.findById(teamID);
    const employeeIndex = team.employees.findIndex(
      (employee) => employee._id == employeeID && !employee.cancelled
    );

    if (employeeIndex === -1) {
      return res
        .status(404)
        .send({ data: {}, error: true, message: "Employee not found" });
    }

    const updatedEmployee = {
      ...team.employees[employeeIndex]._doc, // Ho usato _doc per estrarre i dati dell'oggetto, altrimenti avrei avuto un oggetto con un sacco di proprietà in più del team
      ...req.body,
    }

    team.employees[employeeIndex] = updatedEmployee;

    await team.save();

    res.status(200).send({
      message: "Employee updated successfully",
    });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const teamID = req.params.id;
    const employeeID = req.params.employeeID;

    const updatedEmployee = await Team.findOneAndUpdate(
      {
        _id: teamID,
        employees: {
          $elemMatch: {
            _id: employeeID,
            cancelled: false,
          },
        },
      },
      { $set: { "employees.$.cancelled": true } },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(200).send({
        data: {},
        error: true,
        message: "Employee not found",
      });
    }

    res.status(200).send({
      message: "Employee cancelled successfully",
    });
  } catch (error) {
    res.status(500).send({ data: {}, error: true, message: error.message });
  }
};

export const getEmployees = async (req, res) => {
  const teamID = req.params.id;
  const { employees } = await Team.findById(teamID).select("employees");
  const filteredEmployees = employees.filter((employee) => !employee.cancelled);
  res.status(200).send(filteredEmployees);
};
