import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

export const Verify = (req, res, next) =>{
  const token = req.cookies.token;
  if(token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.TOKEN_SECRET, (err,decode) => {
    if(err) return res.sendStatus(403);
    next();
  })
}
