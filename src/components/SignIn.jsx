import { useState } from 'react';
const SignIn = () => {
	const [form, setForm] = useState({
		namemail: '',
		password: '',
	});
	const inciarSesion = async (e) => {
		e.preventDefault();

		const res = await fetch('http://localhost:3006/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});
		const data = await res.json();
		localStorage.setItem('token-lugar-cultural', data.token);

		window.location.replace('/');
	};
	const handleInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	return (
		<div className="content-container">
			<div className="sign-container">
				<div>
					<h2 className="section-title">Ingresa Tus Datos</h2>
					<form onSubmit={(e) => inciarSesion(e)}>
						<div className="form-group-container">
							<input
								autoFocus={true}
								className="form-input form-input-username"
								type="text"
								name="namemail"
								value={form.namemail}
								onChange={handleInput}
								placeholder="Username"
								required={true}
							/>
						</div>
						<div className="form-group-container">
							<input
								className="form-input"
								type="password"
								name="password"
								placeholder="Contraseña"
								value={form.password}
								onChange={handleInput}
								required={true}
							/>
						</div>
						<div className="form-group-container">
							<input
								className="form-input form-input-submit"
								type="submit"
								value="Ingresar"
							/>
						</div>
					</form>
					<small>
						¿No tienes una cuenta?
						<a className="mute" href="/users/signup">
							Registrate
						</a>
					</small>
				</div>
				<div
					className="sign-hero sign-in-img"
					alt="lasuizabiblioteca sign"
				></div>
			</div>
		</div>
	);
};
export default SignIn;
