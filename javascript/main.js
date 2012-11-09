// Name: Jessica Mehaffey
// Term: VFW 1211
// For: Project 3
// Date: 11/8/2012

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
		for(var i=0; i<radios.length; i++){
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
		if($("medicated").checked){
			medicineValue = $("medicated").value;	
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
	
	// Ran Away?
	function getIssuesRanAway(){
		if($("ranAway").checked){
			ranAwayValue = $("ranAway").value;
		} else {
			ranAwayValue = "No."
		}
	}
	
	// Accident?
	function getIssuesAccident(){
		if($("accident").checked){
			accidentValue = $("accident").value;
		} else {
			accidentValue = "No."
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$("contactForm").style.display = "none";
				$("clearRegistered").style.display = "inline";
				$("displayPets").style.display = "none";
				$("addNewPet").style.display = "inline";
				break;
			case "off":
				$("contactForm").style.display = "block";
				$("clearRegistered").style.display = "inline";
				$("displayPets").style.display = "inline";
				$("addNewPet").style.display = "none";
				$("items").style.display = "none";
				break;
			default:
				$("contactForm").style.display = "none";
				$("clearRegistered").style.display = "inline";
				$("displayPets").style.display = "none";
				$("addNewPet").style.display = "inline";
				return false;
		}
	}
	
	function saveData(){
		var id = Math.floor(Math.random()*10000000);
		getGenderRadio();
		getCareMorningFed();
		getCareEveningFed();
		getCareWatered();
		getCareMedicine();
		getCareWalked();
		getCareBathed();
		getCareCleanedCage();
		getIssuesRanAway();
		getIssuesAccident();
		var item = {};
			item.petName = ["Pet Name: ", $("petName").value];
			item.group = ["Species: ", $("listOfSpecies").value];
			item.gender = ["Gender: ", genderValue] //Radio Buttons
			item.temperamentSlider = ["Temperament (1 = Violent, 10 = Friendly): ", $("temperamentSlider").value];
			item.morningFed = ["Fed (Morning)? ", morningFedValue]; //Checkboxes
			item.eveningFed = ["Fed (Evening)? ", eveningFedValue]; //Checkboxes
			item.watered = ["Watered? ", wateredValue]; //Checkboxes	
			item.medicated = ["Medicated? ", medicineValue]; //Checkboxes
			item.walked = ["Walked? ", walkedValue]; //Checkboxes
			item.bathed = ["Bathed? ", bathedValue]; //Checkboxes
			item.cleanedCage = ["Cleaned Cage? ", cleanedCageValue]; //Checkboxes
			item.ranAway = ["Did the pet run away? ", ranAwayValue]; //Checkboxes
			item.accident = ["Did the pet have an accident? ", accidentValue]; //Checkboxes	
			item.date = ["Date of Care: ", $("date").value];
			item.extraNotes = ["Extra Notes: ",$("extraNotes").value];
		// Save to Local Storage: Stringify to convert object to string
		localStorage.setItem(id, JSON.stringify(item));
		alert("Pet Information Saved!");
	}
	
	function getData(){
		toggleControls("on");
		if (localStorage.length === 0){
			alert("There is no data to clear!")
		}
		// Local storage to browser
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeLi = document.createElement("li");
			var linksLi = document.createElement("li");
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList)
			for(var n in object){
				var makeSubli = document.createElement("li");
				makeSubList.appendChild(makeSubli);
				var optSubText = object[n][0]+ " " + object[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			// Creates edit/delete links for each object in local storage
			makeItemLinks(localStorage.key(i) linksLi);
		}
	
	}
	// Item Links
	function makeItemLinks(key, linksLi){
		// Edit Link
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Pet";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		// Line Break
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);
		// Delete Link
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Pet";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	
	}
	
	function editItem(){
		// Take data from item from local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		toggleControls("off");
		
		// Fill fields with current local storage values
		$("groups").value = item.group[1];
		$("petName").value = item.petName[1];
		$("gender").value = item.gender[1];
		$("temperamentSlider").value = item.temperamentSlider[1];
		$("morningFed").value = item.morningFed[1];
		$("eveningFed").value = item.eveningFed[1];
		$("watered").value = item.watered[1];
		$("medicated").value = item.medicated[1];
		$("walked").value = item.walked[1];
		$("bathed").value = item.bathed[1];
		$("cleanedCage").value = item.cleanedCage[1];
		$("ranAway").value = item.ranAway[1];
		$("accident").value = item.accident[1];
		$("date").value = item.date[1];
		$("extraNotes").value = item.extraNotes[1];

	}
	
	
	function clearData(){
		if(localStorage.length === 0){
			alert("There is no data to clear!");
		} else {
			localStorage.clear();
			alert("All saved pets have been deleted!");
			window.location.reload();
			return false;
		}
	}
	
	// Variable Defaults
	var petSpecies = ["--Choose Species--", "Dog", "Cat", "Fish", "Bird", "Horse", "Reptile", "Rodent", "Other"],
		genderValue;
	makeSpecies();
	
	// Display Link
	var displayPets = $("displayPets");
	displayPets.addEventListener("click", getData);
	
	// Clear Link
	var clearRegistered = $("clearRegistered");
	clearRegistered.addEventListener("click", clearData);
	
	// Save Button
	var savePage = $("submit");
	savePage.addEventListener("click", saveData);
	


// Ending brackets for window.AddEventListener
});