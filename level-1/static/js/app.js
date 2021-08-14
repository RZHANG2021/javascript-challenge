// from data.js
var tableData = data;

// use d3 to select the table body
var tbody = d3.select("tbody");
console.log(tbody);

// iterate through each object in the table data and load into website
tableData.forEach((ufodata)=>{
    var row=tbody.append("tr");
    Object.entries(ufodata).forEach(([key,value])=>{
        var cell=tbody.append("td");
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
 
  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  
  console.log(inputValue);

 // filter the tabledata with the just the datetime input values
  var filteredDate = tableData.filter(datetimedata=>datetimedata.datetime===inputValue);
  console.log(filteredDate);

  // remove any children from the tbody
  tbody.html("");

  // load the filtered data into website
  filteredDate.forEach((ufodata)=>{
    var row=tbody.append("tr");
    Object.entries(ufodata).forEach(([key,value])=>{
        var cell=tbody.append("td");
        cell.text(value);
    });
});

};