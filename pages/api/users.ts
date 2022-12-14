// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnection } from '../../database/config';
import { User } from '../../models';
import { IUser } from '../../interfaces/user';
import bcrypt from 'bcryptjs'

type Data = 
  | { msg: string }
  | IUser;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  await dbConnection()

  switch (req.method) {
    case "POST":
      return createUser(req, res);
    
    default:
      return res.status(200).json({ msg: "Bad Request" });
  }

}


export const createUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

	let { username, email, password } = req.body;

	if( !username || !email || !password ){
		return res.status(400).json({
      msg: "Complete the information correctly"
		})
	}

  const emailExists = await User.findOne({ where: { email } });

  if( emailExists ){
    return res.status(400).json({
      msg: 'Email exists'
    })
  }

  const salt = bcrypt.genSaltSync();
  password = bcrypt.hashSync( password, salt );
  
  const newUser = await User.create({ username, email, password })





  res.json(newUser)

}