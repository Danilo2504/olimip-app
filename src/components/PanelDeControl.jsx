import { Inputs } from './Inputs';

export const PanelDeControl = () => {
	return (
		<>
			<div className="content-container">
				<h3 class="section-title">Agregar libro📚</h3>
				<form action="/admin" class="admin-form" method="POST"></form>
				<Inputs></Inputs>
				<h3 class="section-title">Editar, Eliminar</h3>
				{/* <form class="shelf-form" action="/admin" method="GET">
					<label for="shelf">estante</label>

					<button>Buscar</button>
				</form> */}

				<table border="1px" class="crud-table">
					<thead>
						<tr>
							<th>Editar</th>
							<th>Nombre</th>
							<th>Descripcion</th>
							<th>Ubicacion</th>
							<th>Valoracion</th>
							<th>Web</th>
							<th>Horarios</th>
							<th>Eliminar</th>
						</tr>
					</thead>

					<tbody class="search-results-tbody">
						<tr>
							<td>
								<button>
									<a href="/admin/edit/{{this._id}}">Editar</a>
								</button>
							</td>
							{/* <td> {{this.title}} </td> */}
							{/* <td> {{this.author}} </td> */}
							{/* <td> {{this.editorial}} </td> */}
							{/* <td> {{this.shelf}} </td> */}
							{/* <td> {{this.quantity}} </td> */}
							<td>Museo Bellas Artes</td>
							<td>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Architecto praesentium ex excepturi, incidunt asperiores
								laboriosam fugiat nulla adipisci eaque culpa.
							</td>
							<td>Av. Las heras 3006</td>
							<td>4💖</td>
							<td>https://bellasartes.com</td>

							<td> 9:20 - 19:00</td>

							<td>
								<form
									action="/admin/delete/{{this._id}}?_method=DELETE"
									method="POST"
									class="delete-form"
								>
									<input type="hidden" name="_method" value="DELETE" />
									<button>Eliminar</button>
								</form>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};
