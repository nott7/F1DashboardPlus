import Team from "../models/Team.js";
import ScoutedDriver from "../models/ScoutedDriver.js";
export const addScoutedDriver = async (req, res) => {
  try {
    const teamID = req.params.id;
    const scoutedDriver = new ScoutedDriver({
      ...req.body,
    });
    await Team.findByIdAndUpdate(teamID, {
      $push: { scoutedDrivers: scoutedDriver },
    });
    res.status(201).send({ message: "Scouted Driver created successfully" });
  } catch (error) {
    res.status(500).send({ data: {}, error: true, message: error.message });
  }
};

export const updateScoutedDriver = async (req, res) => {
  try {
    const teamID = req.params.id;
    const scoutedDriverID = req.params.scoutedDriverID;

    const updatedScoutedDriver = await Team.findOneAndUpdate(
      {
        _id: teamID,
        "scoutedDrivers._id": scoutedDriverID,
        "scoutedDrivers.cancelled": false,
      },
      { $set: { "scoutedDrivers.$": { ...req.body, _id: scoutedDriverID } } },
      { new: true }
    );

    if (!updatedScoutedDriver) {
      return res.status(404).send({
        data: {},
        error: true,
        message: "Scouted Driver not found",
      });
    }

    res.status(200).send({
      message: "Scouted Driver updated successfully",
      data: updatedScoutedDriver,
    });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
};

export const deleteScoutedDriver = async (req, res) => {
  try {
    const teamID = req.params.id;
    const scoutedDriverID = req.params.scoutedDriverID;

    const updatedScoutedDriver = await Team.findOneAndUpdate(
      {
        _id: teamID,
        "scoutedDrivers._id": scoutedDriverID,
        scoutedDrivers: {
          $elemMatch: {
            _id: scoutedDriverID,
            cancelled: false,
          },
        },
      },
      { $set: { "scoutedDrivers.$.cancelled": true } },
      { new: true }
    );

    if (!updatedScoutedDriver) {
      return res.status(200).send({
        data: {},
        error: true,
        message: "Scouted Driver not found",
      });
    }

    res.status(200).send({
      message: "Scouted Driver cancelled successfully",
    });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
};

export const getScoutedDrivers = async (req, res) => {
  const teamID = req.params.id;
  const { scoutedDrivers } = await Team.findById(teamID).select(
    "scoutedDrivers"
  );
  const filteredScoutedDrivers = scoutedDrivers.filter(
    (scoutedDriver) => !scoutedDriver.cancelled
  );
  res.status(200).send(filteredScoutedDrivers);
};
