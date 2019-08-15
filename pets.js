function PetService() {

	const petList = [];

	function addPet(pet) {
		petList.push(pet);
	}

	function pets() {
		return petList;
	}

	function filterByType(type){
		const filteredPets = [];
		for(var i=0;i<petList.length;i++){
			const currentPet = petList[i];
			if (currentPet.type === type){
				filteredPets.push(currentPet);
			}
		}
		return filteredPets;
	}

	return {
		addPet,
		pets,
		filterByType
	}
}

const petsElem = document.querySelector(".pets");

// get the templat content
const templateString = document.querySelector(".petListTemplate").innerHTML;

// tell handlebars what content to use
const petListTemplate = Handlebars.compile(templateString);

const petService = PetService();

petService.addPet({
	type: "Cat",
	name: "Garfield",
	color: "Ginger",
	age: "7 years",
	gender: "boy"
});

petService.addPet({
	type: "Cat",
	name: "Angel",
	color: "White",
	age: "1 year",
	gender: "girl"
});

// give the template some data & display it on the screen
petsElem.innerHTML = petListTemplate({
	pets : petService.pets()
});

setTimeout(function(){
	
	petService.addPet({
		type: "Dog",
		name: "Sparks",
		color: "Silver-grey",
		age: "2 year",
		gender: "boy"
	});

	petsElem.innerHTML = petListTemplate({
		pets : petService.pets()
	});

}, 1000);


setTimeout(function(){
	
	petService.addPet({
		type: "Alpaco",
		name: "Albert",
		color: "Grey",
		age: "2 year",
		gender: "boy"
	});

	petsElem.innerHTML = petListTemplate({
		pets : petService.pets()
	});

}, 2000);

setTimeout(function(){
	
	petService.addPet({
		type: "Alpaco",
		name: "Albert",
		color: "Grey",
		age: "2 year",
		gender: "boy"
	});

	petsElem.innerHTML = petListTemplate({
		pets : petService.filterByType("Cat")
	});

}, 4000);

