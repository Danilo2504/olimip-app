import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import { Routes, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Visitas from './components/Visitas';
import { PanelDeControl } from './components/PanelDeControl';
import { VisitasProvider } from './context/VisitasContext';

function App() {
	const loggedIn = () =>
		localStorage.getItem('lugar-cultural-rol') === 'ADMIN' ? true : false;
	return (
		<VisitasProvider>
			<div className="container">
				<Header></Header>

				<Routes>
					<Route path="/" element={<Home></Home>} />
					<Route
						path="users/signup"
						element={
							<div className="content-container">
								<SignUp />
							</div>
						}
					/>
					<Route path="users/signin" element={<SignIn />} />
					<Route path="/visitas" element={<Visitas />} />

					{/* <Route path="/admin">
						{loggedIn ? <Redirect to="/admin" /> : <SignIn />}
					</Route> */}
					<Route path="/admin" element={<PanelDeControl />} />
				</Routes>
				<Footer></Footer>
			</div>
		</VisitasProvider>
	);
}

export default App;
