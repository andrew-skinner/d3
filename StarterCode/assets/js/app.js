// @TODO: YOUR CODE HERE!
//Set up chart
var svgWidth = 500;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 20
};

var width = svgWidth-margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//Create wrapper and position with margins

var svg = d3.select("#scatter").append("svg")
    .attr("width", svgWidth).attr("height", svgHeight);

var chartGroup = svg.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);

//import data from csv
d3.csv("../data.csv", function(error, CSVData) {
    if (error) throw error;
    console.log(CSVData)});


/* 
    //Format
    CSVData.forEach(function(data) {
        label = data.state
        point = [data.age, data.smokes]
        console.log(label);
        console.log(point);
    });

//Create scales
    var xAgeScale = d3.scaleLinear()
        .domain([0, d3.max(CSVData), data => data.age]).range([0, width]);

    var ySmokesScale = d3.scaleLinear()
        .domain([0, d3.max(CSVData), data => data.smokes]).range([height, 0]);

//creat axes
    var bottomAxis = d3.axisBottom(xAgeScale).tickFormat;
    var leftAxis = d3.axisLeft(ySmokesScale);

//Apend the axes to chartgroup

    chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    chartGroup.append("g")
        .attr("stroke", "black")
        .call(leftAxis);

//Generate points

    chartGroup.append("point")
        .data([point])
        .attr("d", label);
}); */