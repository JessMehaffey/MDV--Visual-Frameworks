// Name: Jessica Mehaffey
// Term: VFW 1211
// For: Project 2
// Date: 11/1/2012

// Make sure HTML is loaded before running Javascript
window.addEventListener("DOMContentLoaded", function(){

	// getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	// Variable defaults
	var petSpecies = ["--Choose Species--", "Dog", "Cat", "Fish", "Bird", "Horse", "Reptile", "Rodent", "Other"];
	
	
	// Display Link
	var displayPets = $("displayPets");
	displayPets.addEventListener("click", getPetData);
	
	// Clear Link
	var clearForm = $("clearForm");
	clearForm.addEventListener("click", clearData);
	
	// Save Button
	var savePage = $("submit");
	savePage.addEventListener("click", saveData);
	
	

	// Access Local Storage
	// Link this section to the "Display Registered Pets" link.
	// Should clear form, and display all pets added.
	// createElement - display info to user





// Ending brackets for window.AddEventListener
});