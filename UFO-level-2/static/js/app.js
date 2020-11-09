// from data.js
var tableData = data;

// YOUR CODE HERE!
// vairable for tbody
var tbody = d3.select("tbody");

// get values for each column and row
tableData.forEach((ufoReport)=>{
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) =>{
    console.log(key,value);
    var cell = row.append("td");
    cell.text(value);  
    });
});
// Select button
var button = d3.select("#filter-btn")
button.on("click", function() {
    tbody.html("");
    var inputRequest = d3.select("#input");
    var inputValue = inputRequest.property("value");
    var filteredData = tableData.filter(ufoSightings => 
        ufoSightings.datetime === inputValue ||
        ufoSightings.city === inputValue ||
        ufoSightings.state === inputValue ||
        ufoSightings.country === inputValue ||
        ufoSightings.shape === inputValue
        );
        console.log(filteredData);

        filteredData.forEach(function(inputChoice){
            console.log(inputChoice);
    
            var row = tbody.append("tr");
            Object.entries(inputChoice).forEach(function([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);

});
});
});