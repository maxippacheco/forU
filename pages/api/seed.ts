import type { NextApiRequest, NextApiResponse } from 'next'
import { initialData } from '../../database';
import { IPost, IUser } from '../../interfaces';
import { User } from '../../models';
import { Post } from '../../models/post';

type Data = 
| { message: string; }
| IPost[] 

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

	try {

		const [ _, data ] = await Promise.all([
			Post.sync(),
			Post.bulkCreate( initialData.seedPosts as any )
		]);



		res.json(
			data
		)

	} catch (error) {
		console.log(error);
		return res.status(400).json({
			message: 'There was an error. Please talk to an admin'
		})
		
	}

}