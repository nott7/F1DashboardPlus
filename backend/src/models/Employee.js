import mongoose from "mongoose";
import { nanoid } from "nanoid";

const employeeSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(7),
  },
  name: {
    type: String,
    // required: true,
  },
  surname: {
    type: String,
    // required: true,
  },
  birthDate: {
    type: String,
    // required: true,
  },
  cancelled: {
    type: Boolean,
    default: false,
  },
  jobRole: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
});

export default mongoose.model("Employee", employeeSchema);
