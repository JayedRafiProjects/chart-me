/*******************************
 * 
 * Project: Chart Me
 * Purpose: Scatter plot
 * Language: JavaScript
 * Date: November 2021
 * 
 * Dev: Jayed Rafi
 *
*******************************/

//Global variables
var xAxisScatter = []; //initially empty x axis
var yAxisScatter = []; //initially empty y axis
var xy = []; //holds both points together

/*******************************
* Takes the values from user input
* Assigns those values into xAxis and yAxis
* Then merges those values as {x: x-val, y: y-val} format in xy array
*******************************/
function inputPointsScatter() {
  var xVal= document.getElementById('x-axis-scatter').value; //x axis
  var yVal = document.getElementById('y-axis-scatter').value; //y axis
  xAxisScatter.push(xVal);
  yAxisScatter.push(yVal);
  var merge = {x: xVal, y: yVal};
  xy.push(merge);
  return false;
}

/*******************************
* Makes the cart visible
* Draws the chart based on xy values
*******************************/
function processScatter(){
new Chart("scatter-plot",{
  type: "scatter",
  data: {
    datasets: [{
	  pointRadius: 5,
	  pointBackgroundColor:"rgba(245,84,39,0.7)",//red
      data: xy
    }]
  },
  options: {
    legend: {display: false},
	scales:{
		  beginAtZero: true
	  }
  }
});
}

/*******************************
* Makes xAxis, yAxis & merge array empty
* Visualize the empty chart
*******************************/
function refreshScatter(){
	xAxisScatter.length=0;
	yAxisScatter.length=0;
	xy.length=0;
	processScatter();
}
