import { useEffect, useState } from 'react';
import { createContext } from 'react';

const VisitasInitialValue = [
	{
		key: 1,
		museo: 'Museo Moderno De Buenos Aires',
		descripcion:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt, quod doloribus beatae cum culpa impedit dolore est quo pariatur molestiae aperiam incidunt, doloremque consequatur sed necessitatibus id commodi. Accusamus.',
		img: '',
		horario: 'jueves a las 15hs',
	},
	{
		key: 2,
		museo: 'Malba',
		descripcion:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt, quod doloribus beatae cum culpa impedit dolore est quo pariatur molestiae aperiam incidunt, doloremque consequatur sed necessitatibus id commodi. Accusamus.',
		img: '2',
		horario: '15/09/22 15HS',
	},
];
const museosData = [
	{
		key: 11,
		museo: 'Museo Moderno De Buenos Aires',
		descripcion:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt, quod doloribus beatae cum culpa impedit dolore est quo pariatur molestiae aperiam incidunt, doloremque consequatur sed necessitatibus id commodi. Accusamus.',
		img: '',
		valoracion: '7likes',
		web: 'https://malba.com.ar',
		ubicacion: 'Av. Jujuy 255',
	},
	{
		key: 22,
		museo: 'Malba',
		descripcion:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deserunt, quod doloribus beatae cum culpa impedit dolore est quo pariatur molestiae aperiam incidunt, doloremque consequatur sed necessitatibus id commodi. Accusamus.',
		img: '2',
		valoracion: '7likes',
		web: 'https://malba.com.ar',
		ubicacion: 'Av. Jujuy 255',
	},
];
const VisitasContext = createContext();
const VisitasProvider = ({ children }) => {
	const [visitass, setVisitass] = useState(VisitasInitialValue);

	const addVisit = (e, visitData) => {
		e.preventDefault();
		setVisitass({ ...visitass, visitData });
		console.log(visitass, visitData);
	};
	const data = { visitass, setVisitass, addVisit, museosData };
	return (
		<VisitasContext.Provider value={data}>{children}</VisitasContext.Provider>
	);
};
export default VisitasContext;
export { VisitasProvider };
