import { useContext, useEffect } from 'react';
import VisitasContext from '../context/VisitasContext';
import { Inputs } from './Inputs';
// import { useModal } from '../hooks/useModal';
// import PopUp from './PopUp';
// import styled from 'styled-components';

export const PanelDeControl = () => {
	useEffect(() => {
		if (localStorage.getItem('lugar-cultural-rol') !== 'ADMIN') {
			// let err = new Error('Error en la petición Fetch');
			let err = new Error('Error in fetch queryyyyyyyy');
			window.location.replace('/users/signin');

			throw err;
		}
	}, []);

	const { museosData } = useContext(VisitasContext);

	return (
		<>
			<div className="content-container">
				<h3 className="section-title">Crear Visita Guiada👍</h3>
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

							<th>Eliminar</th>
						</tr>
					</thead>

					{museosData.map(
						({ key, museo, descripcion, ubicacion, img, valoracion, web }) => {
							return (
								<tbody className="search-results-tbody" key={key}>
									<tr>
										<td>
											<button data-id={key}>Editar</button>

											{/* <PopUp isOpen={isOpenModal} closeModal={closeModal}>
												{key}
											</PopUp> */}
										</td>

										<td>{museo}</td>
										<td>{descripcion}</td>
										<td>{ubicacion}</td>
										<td>{valoracion}</td>
										<td>{web}</td>

										<td>
											<form
												action="/admin/delete/{{this._id}}?_method=DELETE"
												method="POST"
												className="delete-form"
											>
												<input type="hidden" name="_method" value="DELETE" />
												<button>Eliminar</button>
											</form>
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
