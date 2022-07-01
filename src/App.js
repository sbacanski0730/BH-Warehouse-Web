import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './globalStyles';
import RegisterPage from './Pages/SignUpPage.js/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Routes>
					<Route exec path='/login' element={<LoginPage />} />
					<Route exec path='/register' element={<RegisterPage />} />
					<Route
						exec
						path='/'
						element={
							<>
								<Navbar />
							</>
						}
					/>
				</Routes>
				{/* <Navbar /> */}
			</Router>
		</>
	);
}

export default App;
