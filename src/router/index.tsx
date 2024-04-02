import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../components/pages/MainPage.tsx';
import Login from '../components/pages/Login.tsx';

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Index;