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
	
	// Find value of gender radio button
	function getGenderRadio(){
		var radios = document.forms[0].gender;
		for(var i=0, i<radios.length; i++){
			if(radios[i].checked){
				genderValue = radios[i].value;
			}
		}
	}
	
	// Fed in morning?
	function getCareMorningFed(){
		if($("fedMorning").checked){
			morningFedValue = $("fedMorning").value;	
		} else {
			morningFedValue = "No."
		}
	}
	
	// Fed in evening?
	function getCareEveningFed(){
		if($("fedEvening").checked){
			eveningFedValue = $("fedEvening").value;	
		} else {
			eveningFedValue = "No."
		}
	}
	
	// Watered?
	function getCareWatered(){
		if($("watered").checked){
			wateredValue = $("watered").value;	
		} else {
			wateredValue = "No."
		}
	}
	
	// Medicated?
	function getCareMedicine(){
		if($("medicine").checked){
			medicineValue = $("medicine").value;	
		} else {
			medicineValue = "No."
		}
	}
	
	// Walked?
	function getCareWalked(){
		if($("walked").checked){
			walkedValue = $("walked").value;	
		} else {
			walkedValue = "No."
		}
	}
	
	// Bathed?
	function getCareBathed(){
		if($("bathed").checked){
			bathedValue = $("bathed").value;	
		} else {
			bathedValue = "No."
		}
	}
	
	// Cleaned Cage?
	function getCareCleanedCage(){
		if($("cleanedCage").checked){
			cleanedCageValue = $("cleanedCage").value;	
		} else {
			cleanedCageValue = "No."
		}
	}
	
	function saveData(){
		var id = Math.floor(Math.random()*10000000);
		getSelectedRadio();
		getCareMorningFed();
		getCareEveningFed();
		getCareWatered();
		getCareMedicine();
		getCareWalked();
		getCareBathed();
		getCareCleanedCage();
		var item = {};
			item.petName = ["Pet Name: ", $("petName").value];
			item.group = ["Species: ", $("listOfSpecies").value];
			item.gender = ["Gender: ", genderValue] //Radio Buttons
			item.temperamentSlider = ["Temperament (1 = Violent, 10 = Friendly): ", $("temperamentSlider").value];
			item.morningFed = ["Fed (Morning)? ", morningFedValue]; //Checkboxes
			item.eveningFed = ["Fed (Evening)? ", eveningFedValue]; //Checkboxes
			item.watered = ["Watered? ", wateredValue]; //Checkboxes	
			item.medicine = ["Medicated? ", medicineValue]; //Checkboxes
			item.walked = ["Walked? ", walkedValue]; //Checkboxes
			item.bathed = ["Bathed? ", bathedValue]; //Checkboxes
			item.cleanedCage = ["Cleaned Cage? ", cleanedCageValue]; //Checkboxes
			
			
			
			
			
			item.issues = ["Issues Encountered: ", issesValue] //Checkboxes
			item.date = ["Date of Care: ", $("date").value];
			item.extraNotes = ["Extra Notes: ",$("extraNotes").value];
		// Save to Local Storage: Stringify to convert object to string
		localStorage.setItem(id, JSON.stringify(item));
		alert("Pet Information Saved!");
	}
	
	// Variable Defaults
	var petSpecies = ["--Choose Species--", "Dog", "Cat", "Fish", "Bird", "Horse", "Reptile", "Rodent", "Other"],
		genderValue;
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