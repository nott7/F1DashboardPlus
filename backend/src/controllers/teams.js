import Team from "../models/Team.js";

export const getTeams = async (req, res) => {
  const teams = await Team.find().select({ password: 0, email: 0 });
  res.status(200).send(teams);
};

export const getTeam = async (req, res) => {
  const team = await Team.findById(req.params.id).select({
    password: 0,
    email: 0,
  }); // Usato per non mostrare la password e l'email
  if (!team) {
    return res.status(200).send({
      data: {},
      error: true,
      message: "Team not found",
    });
  }
  res.status(200).send(team);
};
