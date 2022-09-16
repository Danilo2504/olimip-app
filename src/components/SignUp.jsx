import { useState } from 'react';
const SignUp = () => {
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
	});
	const registrar = async (e) => {
		try {
			e.preventDefault();
			//  console.log(form);
			await fetch('http://localhost:3006/user/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(form),
			});
			alert('confirma tu cuenta!!!!!!!!');
		} catch (err) {
			alert(err);
		}
	};
	const handleInput = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	return (
		<div className="sign-container">
			<div>
				<h2 className="section-title">Crea Una Cuenta</h2>
				<form onSubmit={(e) => registrar(e)}>
					<div className="form-group-container">
						<input
							autoFocus={true}
							type="text"
							id="signup-username-input"
							className="form-input form-input-username"
							name="username"
							placeholder="Username"
							value={form.name}
							onChange={handleInput}
						/>
					</div>
					<div className="form-group-container">
						<input
							autoFocus={true}
							type="email"
							id="signup-email-input"
							className="form-input form-input-username"
							name="email"
							placeholder="email"
							value={form.email}
							onChange={handleInput}
						/>
					</div>
					<div className="form-group-container">
						<input
							type="password"
							className="form-input"
							name="password"
							value={form.password}
							autoComplete="on"
							placeholder="Crea una contraseña"
							onChange={handleInput}
						/>
					</div>
					{/* <div className="form-group-container">
    <input type="password" className="form-input" name="repeatPassword" autoComplete="false" value={form.repeatPassword} placeholder="Confirma Contraseña" onChange={handleInput}/>
</div> */}
					<div className="form-group-container">
						<input
							type="submit"
							className="form-input form-input-submit"
							value="Registrar"
						/>
					</div>
				</form>
				<small>
					¿Ya tienes una cuenta?
					<a className="mute" href="/users/signin">
						Ingresa
					</a>
				</small>
			</div>
			<div className="sign-hero sign-up-img"></div>
		</div>
	);
};
export default SignUp;
