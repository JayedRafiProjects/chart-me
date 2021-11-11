/*******************************
 * Project: Chart Me
 *
 * Purpose: Line chart
 * Language: JavaScript
 * Date: November 2021
 * 
 * Dev: Jayed Rafi
 *
*******************************/

//Global variables
var xAxisLine = []; //initially empty x axis
var yAxisLine = []; //initially empty y axis

/*******************************
* Takes the values from user input
* Assigns those values into xAxis and yAxis
*******************************/
function inputPointsLine() {
  var xVal= document.getElementById('x-axis-line').value; //x axis
  var yVal = document.getElementById('y-axis-line').value; //y axis
  xAxisLine.push(xVal);
  yAxisLine.push(yVal);
  return false;
}

/*******************************
* Makes the cart visible
* Draws the chart based on xAxis (label) & yAxis
*******************************/
function processLine(){
new Chart("line-chart",{
  type: "line",
  data: {
    labels: xAxisLine,
    datasets: [{
      fill: false,
      lineTension: 0,
      borderColor: "rgba(86,101,115,1)", //gray
      pointBackgroundColor:"rgba(245,84,39,0.7)",//red
      data: yAxisLine
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
* Makes both xAxis and yAxis empty
* Visualize the empty chart
*******************************/
function refreshLine(){
	xAxisLine.length=0;
	yAxisLine.length=0;
	processLine();
}
