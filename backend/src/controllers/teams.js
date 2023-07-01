import Team from "../models/Team.js";

export const getTeams = async (req, res) => {
  if (!req.session.team) {
    return res
      .status(401)
      .send({ data: {}, error: true, message: "You are not logged in" });
  }

  const teams = await Team.find().select({ password: 0, email: 0 });
  res.status(200).send(teams);
};

export const getTeam = async (req, res) => {
  if (!req.session.team) {
    return res
      .status(401)
      .send({ data: {}, error: true, message: "You are not logged in" });
  }

  console.log(req.params.id);
  const team = await Team.findById(req.params.id).select({
    password: 0,
    email: 0,
  });
  if (!team) {
    return res.status(200).send({ data: {}, error: true, message: "Team not found", teamID: req.params.id});
  }
  res.status(200).send(team);
};
