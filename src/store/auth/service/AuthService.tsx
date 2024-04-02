import { AuthModel } from '../model/AuthModel.tsx';
import axios from '../../../plugin/axios.tsx';

export const login = async (credentials: AuthModel) => {
	console.log(credentials);
	const response = await axios.post('/auth/login', credentials);
	return response.data;
}