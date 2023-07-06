export const checkTeamAccess = (req, res, next) => {
    const teamID = req.params.id;
  
    if (req.session.team._id !== teamID) {
      return res.status(403).send({
        data: {},
        error: true,
        message: "Unauthorized access to team",
      });
    }
  
    next();
  };