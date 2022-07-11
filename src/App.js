import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './globalStyles';
import RegisterPage from './Pages/SignUpPage.js/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage.jsx';
import ProductsPage from './Pages/ProductsPage/ProductsPage';

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route exec path='/login' element={<LoginPage />} />
					<Route exec path='/register' element={<RegisterPage />} />
				</Routes>
			</Router>
			<Router>
				{/* <Navbar /> */}
				<Routes>
					<Route exec path='/' element={<WelcomePage />} />
					<Route exec path='/products' element={<ProductsPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
