import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	message: string
}

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'POST':
			return createCommunity(req, res);
			
		default:
			return res.status(400).json({ message: 'No Endpoint here'});
	}
}

const createCommunity = (req: NextApiRequest, res: NextApiResponse<Data>) => {

	const { title } = req.body;
	

	return res.json({
		message: 'John Doe'
	})
}