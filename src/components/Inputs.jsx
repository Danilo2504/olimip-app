import { useContext, useState } from 'react';
import VisitasContext from '../context/VisitasContext';

export const Inputs = () => {
	const { visitass, setVisitass, addVisit } = useContext(VisitasContext);
	const [visitaForm, setVisitaForm] = useState({
		name: '',
		desc: '',
		ubication: '',
		schedules: '',
		// valoration: '',
		web: '',
	});
	const handleInput = (e) => {
		setVisitaForm({ ...visitaForm, [e.target.name]: e.target.value });
	};
	const crearMuseo= async(e)=>{
		e.preventDefault()
		console.log(visitaForm);
		try {
			const res=await fetch(`http://localhost:3006/location`,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',	
					Authorization: localStorage.getItem('token-lugar-cultural'),
				},
				body: JSON.stringify(visitaForm),
			})
			
			const data=await res.json()
			console.log('data de nuevo museo',data);
			window.location.reload()
		} catch (error) {
			alert(error)
		}
	}

	return (
		<>
			<div className="form-group-container">
				<div className="form-group">
					<label for="input-tite">Museo</label>
					<input type="text" name="name" className="form-input form-input-title" onChange={handleInput} value={visitaForm.name}/>
				
				</div>
				<div className="form-group">
					<label for="input-author">Descripcion</label>
					<input
						id="input-author"
						required={true}
						type="text"
						className="form-input"
						name="desc"
						value={visitaForm.desc}
						onChange={handleInput}
					/>
				</div>
			</div>
			<div className="form-group-container">
				<div className="form-group form-editorial">
					<label for="editorial">ubication</label>
					<input
						id="editorial"
						required={true}
						type="text"
						className="form-input"
						name="ubication"
						value={visitaForm.ubication}
						onChange={handleInput}
					/>
				</div>
				<div className="form-group form-editorial">
					<label for="input-likes">horarios</label>
					<input
						id="input-likes"
						type="text"
						name="schedules"
						className="form-input form-input-stars"
						value={visitaForm.schedules}
						onChange={handleInput}
					/>
				</div>
			</div>
			<div className="form-group-container">
				{/* <div className="form-group form-editorial">
					<label for="editorial">valoration</label>
					<input
						id="editorial"
						required={true}
						type="text"
						className="form-input"
						name="valoration"
						value={visitaForm.valoration}
						onChange={handleInput}
					/>
				</div> */}
				<div className="form-group form-editorial">
					<label for="editorial">web</label>
					<input
						id="editorial"
						required={true}
						type="text"
						className="form-input"
						name="web"
						value={visitaForm.web}
						onChange={handleInput}
					/>
				</div>
				
			</div>

			<div className="form-group-container">
				<input
					type="submit"
					className="form-input form-input-submit"
					value="Agregar Museo"
					onClick={(e) => {
						// addVisit(e, visitaForm);
						crearMuseo(e)
					}}
				/>
			</div>
		</>
	);
};
