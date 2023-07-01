import mongoose from "mongoose";
import { nanoid } from "nanoid";

const driverSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7),
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  birthPlace: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  carNumber: {
    type: Number,
    required: true,
  },
  grandPrixEntered: {
    type: Number,
    required: true,
  },
  worldChampionships: {
    type: Number,
    required: true,
  },
  grandPrixWins: {
    type: Number,
    required: true,
  },
  polePositions: {
    type: Number,
    required: true,
  },
  careerPoints: {
    type: Number,
    required: true,
  },
  bestFinalResult: Number,
});

export default mongoose.model("Driver", driverSchema);
