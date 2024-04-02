import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080/api', // 개발서버
	// baseURL: 'https:', // 운영서버
	// timeout: 1000, -- removed
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json'
	}
});

export default instance;