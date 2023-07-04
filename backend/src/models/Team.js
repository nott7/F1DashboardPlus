import mongoose from "mongoose";
import { nanoid } from "nanoid";
import ScoutedDriver from "./ScoutedDriver";
import Employee from "./Employee";

const teamSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7),
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  teamPrincipal: {
    type: String,
    required: true,
  },
  drivers: [String],
  employees: [Employee.schema],
  scoutedDrivers: [ScoutedDriver.schema],
  teamsWorldChampionships: {
    type: Number,
    required: true,
  },
  driversWorldChampionships: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Team", teamSchema);
