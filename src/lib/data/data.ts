import { UserModel } from '$lib/models/classes';

export const userData: UserModel[] = [
	{
		name: 'Lionel Ho',
		job: 'Content Creator',
		id: 'epykslion',
	},
].map((value) => new UserModel().deserialize(value));
