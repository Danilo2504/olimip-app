import { useContext, useState } from 'react';
import VisitasContext from '../context/VisitasContext';

export const Inputs = () => {
	const { visitass, setVisitass, addVisit } = useContext(VisitasContext);
	const [visitaForm, setVisitaForm] = useState({
		museo: '',
		descripcion: '',
		img: '',
		horario: '',
	});
	const handleInput = (e) => {
		setVisitaForm({ ...visitaForm, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="form-group-container">
				<div className="form-group">
					<label for="input-tite">Museo</label>
					<select
						name="museo"
						className="form-input form-input-title"
						onChange={handleInput}
					>
						<option value="bellas artes">Bellas Artes</option>
						<option value="moderno">Moderno</option>
						<option value="malba">Malba</option>
					</select>
				</div>
				<div className="form-group">
					<label for="input-author">Descripcion</label>
					<input
						id="input-author"
						required={true}
						type="text"
						className="form-input"
						name="descripcion"
						value={visitaForm.descripcion}
						onChange={handleInput}
					/>
				</div>
			</div>
			<div className="form-group-container">
				<div className="form-group form-editorial">
					<label for="editorial">Imagen</label>
					<input
						id="editorial"
						required={true}
						type="text"
						className="form-input"
						name="img"
						value={visitaForm.img}
						onChange={handleInput}
					/>
				</div>
				<div className="form-group form-editorial">
					<label for="input-likes">Horario</label>
					<input
						id="input-likes"
						type="text"
						name="horario"
						className="form-input form-input-stars"
						value={visitaForm.horario}
						onChange={handleInput}
					/>
				</div>
			</div>

			<div className="form-group-container">
				<input
					type="submit"
					className="form-input form-input-submit"
					value="Crear Visita"
					onClick={(e) => {
						addVisit(e, visitaForm);
					}}
				/>
			</div>
		</>
	);
};
