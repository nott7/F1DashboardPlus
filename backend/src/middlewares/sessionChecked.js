export const sessionChecked = (req, res, next) => {
    if (!req.session.team) {
      return res.status(403).send({ message: 'Not authorized' });
    }
  
    next();
  };