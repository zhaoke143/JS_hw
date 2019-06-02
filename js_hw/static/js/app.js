// from data.js
var tableData = data;


// YOUR CODE HERE!
var tbody = d3.select("tbody");
//console.log(data);

 data.forEach(function(data) {
  console.log(data);
   tbody.append("tr");
   Object.entries(data).forEach(([key, value]) => {
     console.log(key, value);
     var col = tbody.append("td");
     col.text(value);
   });
 });


 var submit = d3.select("#filter-btn");
 submit.on("click", function() {
   
   d3.event.preventDefault();
   d3.select(".output").html("");
   
   var inputValue = d3.select("#datetime").property("value");
   var filteredData = tableData.filter(d => d.datetime == inputValue);
 
   
   filteredData.forEach((data) => {
     tbody.append("tr");
     Object.entries(data).forEach(([key, value]) => {
       var col = tbody.append("td");
       col.text(value);
     });
   });
 });

