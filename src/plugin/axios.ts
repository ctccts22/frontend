import axios from 'axios';
import { API_BASE_URL } from '../api/apiEndPoints';

const instance = axios.create({
	baseURL: API_BASE_URL,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
});

export default instance;