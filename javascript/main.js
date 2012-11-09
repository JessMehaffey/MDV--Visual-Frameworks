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
	
	function saveData(key){
		// If no key, means brand new key
		if(!key){
			var id = Math.floor(Math.random()*10000000);
		} else {
			// Set id to existing key
			id = key;
		}
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
		var radios = document.forms[0].gender
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Male" && obj.gender[1] == "Male"){
				radios[i].setAttribute("checked", "checked");
			} else if(radios[i].value == "Female" && obj.gender[1] == "Female" {
			} else if(radios[i].value == "Unknown/Unsure" && obj.gender[1] == "Unknown/Unsure" {
		}
		if(obj.morningFed[i] == "Yes"){
			$("morningFed").setAttribute("checked", "checked");
		}
		if(obj.eveningFed[i] == "Yes"){
			$("eveningFed").setAttribute("checked", "checked");
		}
		if(obj.watered[i] == "Yes"){
			$("watered").setAttribute("checked", "checked");
		}
		if(obj.medicated[i] == "Yes"){
			$("medicated").setAttribute("checked", "checked");
		}
		if(obj.walked[i] == "Yes"){
			$("walked").setAttribute("checked", "checked");
		}
		if(obj.bathed[i] == "Yes"){
			$("bathed").setAttribute("checked", "checked");
		}
		if(obj.cleanedCage[i] == "Yes"){
			$("cleanedCage").setAttribute("checked", "checked");
		}
		if(obj.ranAway[i] == "Yes"){
			$("ranAway").setAttribute("checked", "checked");
		}
		if(obj.accident[i] == "Yes"){
			$("accident").setAttribute("checked", "checked");
		}
		
		$("temperamentSlider").value = item.temperamentSlider[1];
		$("date").value = item.date[1];
		$("extraNotes").value = item.extraNotes[1];

		// Remove initial listener from save
		save.removeEventListener("click", storeData);
		// Change submit button value
		$("submit").value = "Edit Pet";
		// Save key value
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
		
	}
	
	function deleteItem(){
		if(localStorage.length === 0){
			alert("There is no data to clear.");
		} else {
			localStorage.clear();
			alert("All pets have been deleted!");
			window.location.reload();
			return false;
		}
	
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
	
	function validate(){
		// Define elements to check
		var getGroup = $("groups");
		var getPetName = $("petName");
		
		// Reset Error Message
		errMsg.innerHTML = "";
		getGroup.style.border = "1px solid black";
		getPetName.style.border = "1px solid black";
		
		// Error Message
		var messageAry = [];
		
		// Group validation
		if(getGroup.value === "--Choose Species--"){
			var groupError = "Please select a species.";
			getGroup.style.border = "1px solid red";
			messageAry.push(groupError);
		}
		
		// Pet name validation
		if(getPetName.value === ""){
			var petNameError = "Please enter a pet name.";
			getPetName.style.border = "1px solid red";
			messageAry.push(petNameError);
		}
		
		// Errors
		if(messageAry.length >= 1){
			for(var i=0, j=messageAry.length, i = j; i++){
				var text = document.createElement("li");
				text.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		} else {
			saveData(this.key);
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