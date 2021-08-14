// from data.js
var tableData = data;

// use d3 to select the table body
var tbody = d3.select("tbody");
console.log(tbody);

// iterate through each array in the table data
tableData.forEach((ufodata)=>{
    var row=tbody.append("tr");
    Object.entries(ufodata).forEach(([key,value])=>{
        var cell=tbody.append("td");
        cell.text(value);
    });
});
