// iterate through tbody.
// get reference to the tbody element, add input field and button

var $tbody = document.querySelector("tbody");
var $dataInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInputer = document.querySelector("#shape");
var $searchButton = document.querySelector("#search");
var $resetButton = document.querySelector("#reset");

// add an event listener to searchbutton and resetbutton and add a function

$searchButton.addEventListener("click", searchFunction);
$resertButton.addEventListener("click", resetFunction);

// Set fileteredData to dataSet ; reset data to dataSet
var fileteredData = dataSet;
var resetData = dataSet;

// function to render filetered data to the tbody

function renderTable(){
	$tbody.innerHTML = "";
	for(var i = 0; i< fileteredData.length; i++){
		// get the current data object and its fields
		var data = fileteredData[i];
		var fields = Object.keys(data);
		// create a new row in the tbody, set the index to i + startingIndex
		var $row = $tbody.indertRow(i);
		var (var j=0; j<fields.length; j++){
			// For every ield in he data object, create a new cell;set inner text to current value
			var $field = field[j];
			var $cell = $row.insertCell(j);
			$cell.innerText = data[field];
		}
	}
}

function searchFunction(event){
	//to prevent the page from refreshing
	event.preventDefault();

	var filteredDate = $dateInput.value.trim() //trim removes any white spaces in between
	if(filteredDate !=""){
		filteredData = dataSet.filter(function (data){
			var dataDate = data.datetime;
			return dataDate ===filteredDate;
		});
	

	};
	
	var filteredCity = $cityInput.value.trim().toLowerCase();
  	if (filteredCity !="") {
    	filteredData = filteredData.filter(function(data) {
     		var dataCity = data.city.toLowerCase();
      		return dataCity === filteredCity;

		});
	};

	var filteredState = $stateInput.value.trim().toLowerCase();
	if (filterState !="") {
		filteredData = filteredData.filter(function(data) {
			var dataState = data.set.toLowerCase();
			return dataState === filterState;
		});
	};


	var filteredCountry = $countrInput.value.trim().toLowerCase();
	if(filteredCountry !="") {
		fileteredData = filteredData.filter(function(data) {
			var dataCountry = data.country.toLowerCase();
			return dataCountry === filteredCountry;
		});
	};

		renderTable();

	}

	funtion resetData() {
		filteredData = dataSet;
		$dataInput.value = "";
		$cityInput.value = "";
		$stateInput.value = "";
		$countryInput.value = "";
		$shapeInput.value = "";
		renderTable();

	}

	function resetForm() {
		document.getElementById("myForm").reset();
	}

	// Render the table 

	renderTable();

