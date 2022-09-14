import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { PanelDeControl } from './components/PanelDeControl';

function App() {
	return (
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
				<Route path="/admin" element={<PanelDeControl />} />
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
