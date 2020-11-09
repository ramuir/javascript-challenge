// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


//   tableData.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//       // in the weather report object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

//   practice arrow buttons

tableData.forEach((ufoReport) =>{
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key,value]) =>{
      console.log(key,value);
    var cell = row.append("td");
    cell.text(value)
});
});

var inputDate = d3.select("#filter-btn");
var button = d3.select("#filter-btn")

button.on("click", function(){
    tbody.html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(inputDate){
        console.log(inputDate);

        var row = tbody.append("tr");
        Object.entries(inputDate).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });



});