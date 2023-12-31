import Driver from "../models/Driver.js";

export const createDriver = async (req, res) => {
  try {
    const driver = new Driver({
      ...req.body,
    });
    await driver.save();
    res.status(201).send({ message: "Driver created successfully" });
  } catch (error) {
    res.status(200).send({ data: {}, error: true, message: error.message });
  }
};

export const getDrivers = async (req, res) => {

  const drivers = await Driver.find();

  res.status(200).send(drivers);
};

export const getDriver = async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  if (!driver) {
    return res
      .status(200)
      .send({ data: {}, error: true, message: "Driver not found" });
  }
  res.status(200).send(driver);
};
