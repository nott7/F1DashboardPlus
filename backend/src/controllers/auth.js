import Team from "../models/Team.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  //Sign up come gia' detto non sara' nel front-end, ma solo nel back-end,
  // perche' non vogliamo che gli utenti possano creare un account da soli, ma solo i "direttori della formula 1"
  // l'ho fatta per creare il database
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const team = new Team({
      ...req.body,
      password: hashedPassword,
    });

    await team.save();
    res.status(201).send({ message: "Team created successfully" });
  } catch (error) {
    res.status(200).send({ data: {}, error: true, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const team = await Team.findOne({ email: req.body.email });
    if (!team) {
      return res
        .status(200)
        .send({ data: {}, error: true, message: "Team not found" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      team.password
    );
    if (!validPassword) {
      return res
        .status(200)
        .send({ data: {}, error: true, message: "Wrong password or email" });
    }

    req.session.team = team;
    res
      .status(200)
      .send({ message: "Team logged in successfully", teamID: team._id});
  } catch (error) {
    res.status(200).send({ data: {}, error: true, message: error.message });
  }
};
