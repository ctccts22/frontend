export interface AuthModel {
	email: string;
	password: string;
}

export interface Token {
	accessToken: string | null;
}