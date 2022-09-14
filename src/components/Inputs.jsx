export const Inputs = () => {
	return (
		<>
			<div class="form-group-container">
				<div class="form-group">
					<label for="input-tite">Titulo</label>
					<input
						autofocus="true"
						id="input-tite"
						type="text"
						class="form-input form-input-title"
						name="title"
						required="true"
						value="{{var.title}}"
					/>
				</div>
				<div class="form-group">
					<label for="input-author">Autor</label>
					<input
						id="input-author"
						required="true"
						type="text"
						class="form-input"
						name="author"
						value="{{var.author}}"
					/>
				</div>
			</div>
			<div class="form-group-container">
				<div class="form-group form-editorial">
					<label for="editorial">Editorial</label>
					<input
						id="editorial"
						required="true"
						type="text"
						class="form-input"
						name="editorial"
						value="{{var.editorial}}"
					/>
				</div>
				<div class="form-group">
					<label for="input-shelf">Estante</label>
					<input
						required="true"
						id="input-shelf"
						type="number"
						class="form-input form-input-half"
						name="shelf"
						min="0"
						value="{{var.shelf}}"
					/>
				</div>
			</div>
			<div class="form-group-container">
				<div class="form-group form-editorial">
					<label for="input-img">Image URL</label>
					<input
						id="input-img"
						type="text"
						class="form-input form-input-add-info"
						name="imageUrl"
						value="{{var.imageUrl}}"
					/>
				</div>
				<div class="form-group form-editorial">
					<label for="input-likes">Likes</label>

					<input
						id="input-likes"
						type="number"
						min="0"
						name="stars"
						class="form-input form-input-stars"
						value="{{var.stars}}"
					/>
				</div>
			</div>
			<div class="form-group-container">
				<input
					type="submit"
					class="form-input form-input-submit"
					value="{{boton}}"
				/>
			</div>
		</>
	);
};
