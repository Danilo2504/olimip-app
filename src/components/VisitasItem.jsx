const VisitasItem = ({ museo, descripcion, horario, img }) => {
	return (
		<div className="littleMuseumCtn visitasItemCtn">
			<div className="visitMark">Visita</div>
			<div className="thumbnail">
				<img src="" alt="" />
			</div>
			<div className="titleViewMoreCtn">
				<div className="titleAndDescriptionCtn">
					<div className="titleArrow">
						<p>{museo}</p>
					</div>
					<div className="description">{descripcion}</div>

					<hr />
					<p className="visitaHora">⏰ {horario}</p>
				</div>
			</div>
		</div>
	);
};
export default VisitasItem;
