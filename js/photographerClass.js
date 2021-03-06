class Photographer {
	constructor(photographer, ownedmedia) 
	{
		this.photographer = photographer;
		this.ownedmedia = ownedmedia;
	}

	showProfileInMain() 
	{
		return ` 
			<article class="photographer">
				<div id="render-individual-page-${this.photographer.id}" onclick="renderPhotographerIndividualPage(${this.photographer.id})">
					<img class="profile-img" src="./img/PhotographersIDPhotos/${this.photographer.portrait}" alt="leads to individual page" tabindex="0">
					<h2>${this.photographer.name}</h2>
				</div>
				<h5>${this.photographer.city}, ${this.photographer.country}</h5>
				<p class="description">${this.photographer.tagline}</p>
				<p class="price-per-day">$${this.photographer.price}/day</p>
				${generateTags(this.photographer.tags)}
			</article>		
        	`
		
	}

	showIndividualProfile(ID) 
	{
		createMediaArrayOfPhotographer(ID).map(item => item.media.image)
		return `   
			<div class="photographerHeader">
				<div class="photographerHeaderLeft">
						<div>
							<h2>${this.photographer.name}</h2>
							<h5>${this.photographer.city}, ${this.photographer.country}</h5>
							<p class="header-description">${this.photographer.tagline}</p>
							${generateTagsForIndividualPage(this.photographer.tags)}
						</div>
				</div>
		
				<button class="contact-button modal-btn">Contact me</button>
				<div class="header-profile-img-container">
					<img class="header-profile-img" src="./img/PhotographersIDPhotos/${this.photographer.portrait}" alt="Thumnail of ${this.photographer.name}">
				</div>
			</div>
			
			<div class="bground" role="dialog" aria-modal=”true” aria-hidden="true">
				<div class="content">
					<span class="close" id="form-modal-close"></span>
					<div class="modal-body">
				
						<h1 class="modal-body-title" id="formTitle">Contact me <br> ${this.photographer.name}</h1>
						<form
						id="contact-form"
						name="reserve"
						action="index.html"
						method="get"
						aria-labelledby="formTitle"
						>
							<div class="formData">
								<label for="formData-first" id="first-name-label">First Name</label><br>
								<input
								class="text-control"
								type="text"
								id="formData-first"
								name="first"
								aria-required="true"
								required
								aria-labelledby="first-name-label"
								/><br>
							</div>
					
							<div class="formData">
								<label for="formData-last" id="last-name-label">Last Name</label><br>
								<input
								class="text-control"
								type="text"
								id="formData-last"
								name="last"
								aria-required="true"
								required
								aria-labelledby="last-name-label"
								/><br>
							</div>
					
							<div class="formData">
								<label for="formData-email" id="email-label">Email</label><br>
								<input
								class="text-control"
								type="email"
								id="formData-email"
								name="email"
								aria-required="true"
								required
								aria-labelledby="email-label"
								/><br>
							</div>
					
							<div class="formData">
								<label for="formData-message" id="message-label">Your message</label><br>
								<textarea
									class="text-control textarea-text"
									type="email"
									id="formData-message"
									name="message"
									aria-required="true"
									required
									aria-labelledby="message-label"
								></textarea>
					
							</div>
							<button
								class="btn-submit button"
								type="submit"
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>

			<div class="selectbox-container">
				<p class="sorting-text">Order by</p>
				<label class="custom-selector">
					
					<select id="selectbox">
						<option value="popularity">Popularity</option>
						<option value="date">Date</option>
						<option value="title">Title</option>
					</select>
				</label>
			</div>

			<div class="gallery-wrapper" id="gallery-wrapper" aria-hidden="false">
				<div id="photo-gallery" class="gallery">
					${createMediaGroup(createMediaArrayOfPhotographer(ID)).join("")}
				</div>
			</div> 

			<div class="bottom-card">
				<div class="rating">
					<p id="total-likes">${this.ownedmedia.map(item => item.likes).reduce((accumulator, currentValue) => accumulator + currentValue)}</p>
					<i class="fas fa-heart"></i>
                </div>
				<p>$${this.photographer.price}/day</p>
			</div>
			`
		}

	}
