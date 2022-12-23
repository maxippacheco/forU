import bcrypt from 'bcryptjs';

export interface seedUser{
	username: string;
	email: string;
	password: string;
	status?: 'online' | 'offline';
	avatar?: string;
}


// TODO: HASH PASSWORD
export const seedUsers = [
	{
		username: 'pepe_theboss',
		email: 'test@test.com',
		password: bcrypt.hashSync('123456')
	},
	{
		username: 'carloncho01',
		email: 'test2@test.com',
		password: bcrypt.hashSync('123456')
	},
	{
		username: 'juan_perez',
		email: 'test3@test.com',
		password: bcrypt.hashSync('123456')
	},
]


export interface seedLike{
	liked_by: string[];
	disliked_by: string;
	likes: number;
	dislikes: number;
	post_id: string;
}

export interface seedComment{
	post_id: string;
	user_id: string;
	title: string;
	description: string;
}

interface seedCommunity{
	title: string;
	owner: string;
	users: seedUser[];
	img?: string;
}

export interface seedPost{
	user_id: string;
	title: string;
	description: string;
	// id: string;
	image?: string;
	interactions?: seedLike;
	comments?: seedComment[];
	community: seedCommunity;
}

export const seedPosts: seedPost[] = [
	{
		user_id: '1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. VivamusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. Vivamus',
		title: 'This is the first post',
		community: {
			owner: 'carloncho01',
			title: '',
			users: [
	
			],
			
		}

	},
	{
		user_id: '2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. Vivamus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. Vivamus',
		title: 'This is the second post',
		community: {
			owner: 'pepe_theboss',
			title: '',
			users: [
				
			],
			
		}
    
	},
	{
		user_id: '1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. Vivamus.',
		title: 'This is the third post',
		community: {
			owner: 'carloncho01',
			title: '',
			users: [
				
			],
			
		}

	},
	{
		user_id: '2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. VivamusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. VivamusLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum dui. Suspendisse ultrices quam id sem varius commodo. Vivamus.',
		title: 'This is the fourth post',
		community: {
			owner: 'pepe_theboss',
			title: '',
			users: [
				
			],
			
		}

	}

]