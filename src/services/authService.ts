import { Auth } from '@/types/auth.ts';
import { API_LOGIN } from '@/api/apiEndPoints.ts';
import axios from '../plugin/axios.ts';

export const login = async (credentials: Auth) => {
	console.log(credentials);
	const response = await axios.post(API_LOGIN, credentials);
	return response.data;
}