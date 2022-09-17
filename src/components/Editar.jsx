import { useEffect } from "react";
import { useState } from "react";
const Editar=()=>{
	useEffect(() => {
		if (localStorage.getItem('lugar-cultural-rol') !== 'ADMIN') {
			// let err = new Error('Error en la petición Fetch');
			let err = new Error('Error in fetch queryyyyyyyy');
			window.location.replace('/users/signin');

			throw err;
		}
	}, []);
	const [visitaForm, setVisitaForm] = useState({
		name: '',
		desc: '',
		ubication: '',
		schedules: '',
		web: '',
		image: '',
	});
    const EditarMuseo=async(e)=>{
		e.preventDefault()
		// {}
        try {
			const res=await fetch(`http://localhost:3006/location/${visitaForm.name}`,{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: localStorage.getItem('token-lugar-cultural'),
				},
				body: JSON.stringify(visitaForm),
			})
			const data=await res.json()
			window.location.replace('/admin')
		} catch (error) {
			alert(error)
		}
    }
	const handleInput = (e) => {
		setVisitaForm({ ...visitaForm, [e.target.name]: e.target.value });
	};
    return (<>
    <div className="content-container">
	<a href="/admin">Volver</a>
	<h3 className="section-title">Editar</h3>
	
	
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
				<div className="form-group form-editorial">
					<label for="editorial">image</label>
					<input
						id="editorial"
						required={true}
						type="file"
						className="form-input"
						name="image"
						value={visitaForm.image}
						onChange={handleInput}
					/>
				</div>
				
			</div>

			<div className="form-group-container">
				<input
					type="submit"
					className="form-input form-input-submit"
					value="Editar Museo"
					onClick={(e) => {
					
						EditarMuseo(e)
					}}
				/>
			</div>
            </div>
    </>)
}
export default Editar