import { create } from 'zustand';
import { Auth } from '@/types/auth.ts';
import { Token } from '@/types/auth.ts';
import { login } from '@/services/authService.tsx';
interface CredentialState {
	credential: Auth;
	token: Token;
	login: (credentials: Auth) => void;
}

export const useAuthStore = create<CredentialState>((set) => ({
	// state
	credential: { email: '', password: '' },
	token: { accessToken: '' },
	//actions
	login: async (credentials: Auth) => {
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