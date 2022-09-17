import { useState } from 'react';
import { useContext, useEffect } from 'react';
import VisitasContext from '../context/VisitasContext';
import { Inputs } from './Inputs';
// import { useModal } from '../hooks/useModal';
// import PopUp from './PopUp';
// import styled from 'styled-components';

export const PanelDeControl = () => {
	const [allLocations,setAllLocations]=useState([])
	useEffect(() => {
		if (localStorage.getItem('lugar-cultural-rol') !== 'ADMIN') {
			// let err = new Error('Error en la petición Fetch');
			let err = new Error('Error in fetch queryyyyyyyy');
			window.location.replace('/users/signin');

			throw err;
		}
	}, []);
	useEffect(() => {
		const getLocations=async()=>{
			try {
				const res=await fetch('http://localhost:3006/location/all')
				const data=await res.json()
				setAllLocations(data)
				console.log(allLocations,'todas las locaciones');
			} catch (error) {
				alert(error)
			}			
		}
		getLocations()
	}, []);

	
	const eliminarMuseo=async(e)=>{
		
		const name=e.target.dataset.name
		const deleteMuseo=window.confirm('Deseas eliminar el museo?');
		try {
			if(deleteMuseo){
				const res=await fetch(`http://localhost:3006/location/${name}`,{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: localStorage.getItem('token-lugar-cultural'),
					},
				})
				window.location.reload()
			}
		} catch (error) {
			alert(error)
		}
	}
	return (
		<>
			<div className="content-container">
				<h3 className="section-title">Agregar Museo👍</h3>
				<form action="/admin" className="admin-form" method="POST"></form>
				<Inputs></Inputs>
				<h3 className="section-title">Editar info de Museos</h3>
				{/* <form className="shelf-form" action="/admin" method="GET">
					<label for="shelf">estante</label>

					<button>Buscar</button>
				</form> */}

				<table border="1px" className="crud-table">
					<thead>
						<tr>
							<th>Editar</th>
							<th>Nombre</th>
							<th>Descripcion</th>
							<th>Ubicacion</th>
							<th>Valoracion</th>
							<th>Web</th>
							<th>image</th>
							<th>Eliminar</th>
						</tr>
					</thead>

					{allLocations.map(
						({ id, name, desc, ubication, valoration, web,image }) => {
							return (
								<tbody className="search-results-tbody" key={id}>
									<tr>
										<td>
											<button data-id={id} onClick={()=>{
												alert(`Por favor recorda el nombre del museo para editarlo. Copialo -> ${name} `)
											}}><a href="/editar">Editar</a></button>

											
										</td>

										<td>{name}</td>
										<td>{desc}</td>
										<td>{ubication}</td>
										<td>{valoration}</td>
										<td>{web}</td>
										<td>{image}</td>

										<td>
											
												
												<button data-name={name} onClick={eliminarMuseo}>Eliminar</button>
											
										</td>
									</tr>
								</tbody>
							);
						}
					)}
				</table>
			</div>
		</>
	);
};
