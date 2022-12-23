// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnection } from '../../database/config';
import { Post, User } from '../../models';
import { IPost } from '../../interfaces/post';
import { dbPosts } from '../../database';

type Data = 
  | { msg: string }
  | IPost[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  await dbConnection();

  switch (req.method) {
    case "GET":
      return getPosts(req, res);
    
    default:
      return res.status(200).json({ msg: "Bad Request" });
  }

}

const getPosts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

	const posts = await dbPosts.getPosts();
	
	res.json( posts )
}