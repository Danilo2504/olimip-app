import { useState } from "react";
const Editar=()=>{
    const EditarMuseo=(e)=>{
        console.log('aaas');
    }
    const [visitaForm, setVisitaForm] = useState({
		name: '',
		desc: '',
		ubication: '',
		schedules: '',
		
		web: '',
	});
	const handleInput = (e) => {
		setVisitaForm({ ...visitaForm, [e.target.name]: e.target.value });
	};
    return (<>
    <div className="content-container">
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
				
			</div>

			<div className="form-group-container">
				<input
					type="submit"
					className="form-input form-input-submit"
					value="Crear Visita"
					onClick={(e) => {
						// addVisit(e, visitaForm);
						EditarMuseo(e)
					}}
				/>
			</div>
            </div>
    </>)
}
export default Editar