const Footer=()=>{
    return (<footer className='footer'>
	<div className='footer-container'>
		<nav className='footer-nav'>
			<ul>
				<li><a href='/about/'>Acerca</a></li>
				<li><a href='/about/#privacy'>Privacidad</a></li>
				<li><a href='/about/#api'>API</a></li>
				<li><a href='/about/#contact'>Contacto</a></li>
			</ul>
		</nav>
		<section className='social'>
			<a
				href='https://www.facebook.com/tecnica26/'
				target='_blank'
				className='facebook'
				title='facebook'
			>
				<span></span>
			</a>
			<i className='slash'></i>
			<a
				href='https://www.instagram.com/lasuizacompu'
				target='_blank'
				className='instagram'
				title='instagram'
			>
				<span></span>
			</a>
		</section>
		<p className='copyright'>
			Por los alumnos
			<a
				className='mute'
				href='https://instagram.com/puntosculturales'
				target='_blank'
			>luciando,danilo y brandon</a>
			para las olimpiadasss
		</p>
	</div>
</footer>)
}
export default Footer;