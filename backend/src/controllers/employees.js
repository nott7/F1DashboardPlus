import Team from "../models/Team.js";
import Employee from "../models/Employee.js";

export const addEmployee = async (req, res) => {
  try {
    const teamID = req.params.id;

    if (req.session.team._id !== teamID) {
      return res.status(403).send({
        data: {},
        error: true,
        message: "Unauthorized access to team",
      });
    }
    const employee = new Employee({
      ...req.body,
    });
    await Team.findByIdAndUpdate(teamID, { $push: { employees: employee } });

    res.status(201).send({ message: "Employee created successfully" });
  } catch (error) {
    res.status(500).send({ data: {}, error: true, message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const teamID = req.params.id;
    if (req.session.team._id !== teamID) {
      return res.status(403).send({
        data: {},
        error: true,
        message: "Unauthorized access to team",
      });
    }
    const employeeID = req.params.employeeID;

    const updatedEmployee = await Team.findByIdAndUpdate(
      teamID,
      { $set: { "employees.$[element]": req.body } },
      { arrayFilters: [{ "element._id": employeeID }] }
    );

    if (!updatedEmployee || updatedEmployee.cancelled) {
      return res
        .status(200)
        .send({ data: {}, error: true, message: "Employee not found" });
    }

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
    if (req.session.team._id !== teamID) {
      return res.status(403).send({
        data: {},
        error: true,
        message: "Unauthorized access to team",
      });
    }
    const employeeID = req.params.employeeID;

    const updatedEmployee = await Team.findOneAndUpdate(
      { _id: teamID, "employees._id": employeeID },
      { $set: { "employees.$.cancelled": true } }
    );

    if (!updatedEmployee || updatedEmployee.cancelled) {
      return res
        .status(200)
        .send({ error: true, message: "Employee not found" });
    }

    res.status(200).send({
      message: "Employee cancelled successfully",
    });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
};

export const getEmployees = async (req, res) => {
  const teamID = req.params.id;
  if (req.session.team._id !== teamID) {
    return res.status(403).send({
      data: {},
      error: true,
      message: "Unauthorized access to team",
    });
  }
  const employees = await Team.findById(teamID).select({ employees: 1 });
  res.status(200).send(employees);
};
