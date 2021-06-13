class Photographer {
	constructor(photographer) {
		this.photographer = photographer;
	}

	showProfileInMain() {
		return ` <article class="photographer">
        <img class="profile-img" src="${this.photographer.photo}" alt="Thumnail image of ${this.photographer.name}">
        <h2 onclick="showProfilePage()">${this.photographer.name}</h2>
        <h5>${this.photographer.city}, ${this.photographer.country}</h5>
        <p class="description">${this.photographer.tagline}</p>
        <p class="price-per-day">$${this.photographer.price}/day</p>
        ${generateTags(this.photographer.tags)}
        </article>
        `
	}


	showIndividualProfile() {
		return `   
        <div class="photographerHeader">
          <div class="photographerHeaderLeft">
                <div>
                    <h2>${this.photographer.name}</h2>
                    <h5>${this.photographer.city}, ${this.photographer.country}</h5>
                    <p class="header-description">${this.photographer.tagline}</p>
                    ${generateTags(this.photographer.tags)}
                </div>
          </div>
       
          <button class="contact-button">Contact Me</button>
          <div class="header-profile-img-container">
            <img class="header-profile-img" src="${this.photographer.photo}" alt="Thumnail image of ${this.photographer.name}">
          </div>
        </div>
		
        
        <div class="sort-by">
			<p>Order by</p>
			<div class="select" tabindex="1">
				<input class="selectopt" name="test" type="radio" id="opt1" checked>
				<label for="opt1" class="option">Popularity</label>
				<input class="selectopt" name="test" type="radio" id="opt2">
				<label for="opt2" class="option">Date</label>
				<input class="selectopt" name="test" type="radio" id="opt3">
				<label for="opt3" class="option">Title</label>
			</div>
        </div>


        <div class="photo-gallery">
        	${generateGallery(test2)}
        </div>
        `
	}
}

// Creating array of photographers
const photographersGroup = []
for (let photographer of photographers) {
	const pt = new Photographer(photographer);
	photographersGroup.push(pt)
}

// function to generate tags of photographers
const generateTags = (tags) => {
	return tags.map(tag => `<button class="category-button mr-1">#${tag}</button>`).join('')
}

// function to sort photographers by tag
const filterPhotographersByTag = (tag) => {
	let filteredPhotographers = [];
	photographer = photographersGroup.filter(photographer => photographer.photographer.tags.includes(tag))
	filteredPhotographers.push(photographer)
	return filteredPhotographers[0]
	// Qestion : Why [0] have to be there?
}

// function to show Header of the Home page
function showHomePageHeader() {
	document.getElementById("body").innerHTML =
		`
  <header>
        <a href="./index.html"><img src="./img/logo.svg" alt="FishEye Home Page"></a>
        <nav>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('portrait'))">#Portrait</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('art'))">#Art</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('fashion'))">#Fashion</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('architecture'))">#Architecture</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('travel'))">#Travel</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('sport'))">#Sport</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('animals'))"">#Animals</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('events'))">#Events</button>
        </nav>
        <h1>Our Photographer</h1>
    </header>
    <main id="photographers"></main>
  `
}

// function to show the main section of Home page which displays photographers info
function showHomeMainSection(array) {
	const group = [];
	array.forEach(item => {
		let select = item.showProfileInMain();
		group.push(select)
	})
	document.getElementById("photographers").innerHTML = group;
}

// function showHomeMainSection (array)
// {
//     const group = [];
//     for (i = 0; i < array.length; i++) 
//     {
//         let select = array[i].showProfileInMain(); 
//         group.push(select)
//     }
//     document.getElementById("photographers").innerHTML = group;
// }

// Function to render Home page
const renderHomePage = () => {
	showHomePageHeader();
	showHomeMainSection(photographersGroup);
}

// renderHomePage()