// Step 2: Apply style to an HTML element using D3
d3.select("h1")
    .style("color", "green");

// Step 2 Extension: Experimenting with styling other HTML elements using D3

// Style a paragraph
d3.select("p")
    .style("color", "blue")
    .style("font-size", "18px");

// Style the correct div
d3.select("#svg-container")
    .style("border", "2px dashed orange")
    .style("padding", "10px");

// Style a h2
d3.select("h2")
    .style("color", "purple")
    .style("text-decoration", "underline");

// Step 3: Append a paragraph element to the correct div

d3.select("#svg-container")
    .append("p")
    .text("Purchasing a low energy consumption TV will help with your energy bills!");

// Step 4: Append a rectangle to the correct SVG

d3.select("#my-svg")
    .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 30)
    .style("fill", "green");
