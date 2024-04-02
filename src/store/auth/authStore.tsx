import { create } from 'zustand';
import { AuthModel } from './model/AuthModel.tsx';
import { Token } from './model/AuthModel.tsx';
import { login } from './service/AuthService.tsx';
interface CredentialState {
	credential: AuthModel;
	token: Token;
	login: (credentials: AuthModel) => void;
}

export const useAuthStore = create<CredentialState>((set) => ({
	// state
	credential: { email: '', password: '' },
	token: { accessToken: '' },
	//actions
	login: async (credentials: AuthModel) => {
		console.log('login:', credentials);
		try {
			const response = await login(credentials);

			if (response && response.accessToken) {
				set({ token: { accessToken: response.accessToken } });
			}
			console.log('login response:', response);
		} catch (error) {
			console.error('Error during login:', error);
			throw error;
		}
	}
}));