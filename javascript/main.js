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

	// Create select field element and populate with options
	function makeSpecies(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $("select"),
			makeSelect = document.createElement("select");
			makeSelect.setAttribute("id", "listOfSpecies");
		for(var i=0, j=petSpecies.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = petSpecies[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	// Variable Defaults
	var petSpecies = ["--Choose Species--", "Dog", "Cat", "Fish", "Bird", "Horse", "Reptile", "Rodent", "Other"];
	makeSpecies();
	
	// Display Link
	var displayPets = $("displayPets");
	displayPets.addEventListener("click", getPetData);
	
	// Clear Link
	var clearForm = $("clearForm");
	clearForm.addEventListener("click", clearData);
	
	// Save Button
	var savePage = $("submit");
	savePage.addEventListener("click", saveData);
	


// Ending brackets for window.AddEventListener
});