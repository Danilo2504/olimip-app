import { useEffect } from 'react';
import { useState } from 'react';
import { LittleMuseum } from './LittleMuseum';

const Home = () => {
	const [userData, setUserData] = useState();
	useEffect(() => {
		const checkUser = async () => {
			try {
				const res = await fetch('http://localhost:3006/api/auth/find', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						Authorization: localStorage.getItem('token-lugar-cultural'),
					},
				});
				const data = await res.json();
				setUserData(data);
				localStorage.setItem('lugar-cultural-name', data.name);
				localStorage.setItem('lugar-cultural-rol', data.role);
			} catch (error) {
				alert(error);
			}
		};
		checkUser();
	}, []);
	console.log(userData);
	return (
		<div className="content-container">
			{/* {
    userData.role==='ADMIN'?<div>asdsad<div/>:<div>nooo<div/>
} */}
			<LittleMuseum></LittleMuseum>
			<LittleMuseum></LittleMuseum>
			<LittleMuseum></LittleMuseum>
		</div>
	);
};
export default Home;
