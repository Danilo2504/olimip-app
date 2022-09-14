const Header = () => {
	const token = localStorage.getItem('token-lugar-cultural');

	let isToken = null;

	const showDropdown = (e) => {
		document.querySelector('.user-dropdown-menu').classList.toggle('none');
	};
	const cerrarSesion = () => localStorage.removeItem('token-lugar-cultural');

	if (token) {
		console.log('hay token');
		isToken = (
			<div className="header-pfp-container">
				<div style={{ backgroundColor: 'red' }} className="header-pfp"></div>
				<span onClick={showDropdown} className="header-pfp-down">
					👇
				</span>
				<div className="user-dropdown-menu none">
					<h5 className="user-dropdown-title">
						{localStorage.getItem('lugar-cultural-name')}
					</h5>

					<a
						href={`/p/${localStorage.getItem('lugar-cultural-name')}`}
						className="user-dropdown-a"
					>
						Perfil
					</a>
					<a href="/settings" className="user-dropdown-a">
						Configuracion
					</a>
					<a href="/about" className="user-dropdown-a">
						Ayuda
					</a>
					<a
						className="user-dropdown-a"
						href="/users/signin"
						onClick={cerrarSesion}
					>
						Cerrar Sesion
					</a>
				</div>
			</div>
		);
	} else {
		isToken = (
			<>
				<li className="header-link header-link-signin">
					<a href="/users/signin">Ingresar</a>
				</li>
				<li className="header-link header-link-signup">
					<a href="/users/signup">Registrar</a>
				</li>
			</>
		);
	}
	return (
		<>
			<header className="header">
				<nav className="header-nav">
					<h1 className="header-logo">
						<a href="/">Puntos Culturales</a>
					</h1>
					<div className="header-left">
						<li className="header-link">
							<a href="/todo">Lugares</a>
						</li>
						<li className="header-link">
							<a href="/estanterias?shelf=8">info básica sobre el museo</a>
						</li>
						{localStorage.getItem('lugar-cultural-rol') === 'ADMIN' && (
							<li className="header-link">
								<a href="/admin">PanelDeControl</a>
							</li>
						)}
					</div>

					<div className="header-right">{isToken}</div>
				</nav>
			</header>
		</>
	);
};
export default Header;
