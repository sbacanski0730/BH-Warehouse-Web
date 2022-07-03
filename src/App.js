import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './globalStyles';
import RegisterPage from './Pages/SignUpPage.js/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import WelcomePage from './Pages/Home/WelcomePage.jsx';

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Navbar />
				<Routes>
					<Route exec path='/login' element={<LoginPage />} />
					<Route exec path='/register' element={<RegisterPage />} />
					<Route exec path='/' element={<WelcomePage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
