import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import { Routes, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import InfoBasica from './components/InfoBasica';
import { PanelDeControl } from './components/PanelDeControl';

import Editar from './components/Editar';

function App() {
	const loggedIn = () =>
		localStorage.getItem('lugar-cultural-rol') === 'ADMIN' ? true : false;
	return (
		
			<div className="container">
				
				<Header></Header>
			<div className="content-container">

				<Routes>
					<Route path="/" element={<Home></Home>} />
					<Route
						path="users/signup"
						element={<SignUp />}
					/>
					<Route path="users/signin" element={<SignIn />} />
					<Route path="/infobasica" element={<InfoBasica />} />

					{/* <Route path="/admin">
						{loggedIn ? <Redirect to="/admin" /> : <SignIn />}
					</Route> */}
					<Route path="/admin" element={<PanelDeControl />} />
					<Route path="/editar" element={<Editar />} />
				</Routes>
			</div>
				<Footer></Footer>
			</div>
		
	);
}

export default App;
