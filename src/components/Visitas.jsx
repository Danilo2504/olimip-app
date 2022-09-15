import VisitasItem from './VisitasItem';
import { useContext } from 'react';
// import VisitasContext from '../context/VisitasContext';
import VisitasContext from '../context/VisitasContext';

const Visitas = () => {
	const { visitass } = useContext(VisitasContext);

	return (
		<div className="content-container">
			<h3 className="section-title">Visitas</h3>
			<hr />
			<br />
			{visitass.map(({ key, museo, descripcion, horario, img }) => {
				return (
					<VisitasItem
						key={key}
						museo={museo}
						descripcion={descripcion}
						horario={horario}
						img={img}
					></VisitasItem>
				);
			})}
		</div>
	);
};
export default Visitas;
