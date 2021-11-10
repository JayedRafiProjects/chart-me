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
var xAxis = []; //initially empty x axis
var yAxis = []; //initially empty y axis

/*******************************
* Takes the values from user input
* Assigns those values into xAxis and yAxis
*******************************/
function inputPoints() {
  var xVal= document.getElementById('x-axis').value; //x axis
  var yVal = document.getElementById('y-axis').value; //y axis
  xAxis.push(xVal);
  yAxis.push(yVal);
  return false;
}

/*******************************
* Makes the cart visible
* Draws the chart based on xAxis (label) & yAxis
*******************************/
function process(){
new Chart("line-chart",{
  type: "line",
  data: {
    labels: xAxis,
    datasets: [{
      fill: false,
      lineTension: 0,
      borderColor: "rgba(86,101,115,1)", //gray
		pointBackgroundColor:"rgba(245,84,39,0.8)",//red
      data: yAxis
    }]
  },
  options: {
    legend: {display: false},
  }
});
}

/*******************************
* Makes both xAxis and yAxis empty
* Visualize the empty chart
*******************************/
function refresh(){
	xAxis.length=0;
	yAxis.length=0;
	process();
}
