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
var list = d3.selectAll("li");

// Create event handlers for clicking the button or pressing the enter key
list.on("submit",runEnter);
button.on("click", runEnter);

// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");
  var listItem = d3.select(this);
  var a=listItem.id.value=="city"
//   var listItemText=ListItem.text();
  console.log(a);
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