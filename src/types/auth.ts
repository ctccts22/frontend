export interface Auth {
	email: string;
	password: string;
}

export interface Token {
	accessToken: string | null;
}