/*******************************
 * 
 * Project: Chart Me
 * Purpose: Bar chart
 * Language: JavaScript
 * Date: November 2021
 * 
 * Dev: Jayed Rafi
 * 
*******************************/

//Global variables
var xAxisBar = []; //initially empty x axis
var yAxisBar = []; //initially empty y axis

/*******************************
* Takes the values from user input
* Assigns those values into xAxis and yAxis
*******************************/
function inputPointsBar() {
  var xVal= document.getElementById('x-axis-bar').value; //x axis
  var yVal = document.getElementById('y-axis-bar').value; //y axis
  xAxisBar.push(xVal);
  yAxisBar.push(yVal);
  return false;
}

/*******************************
* Makes the cart visible
* Draws the chart based on xAxis (label) & yAxis
*******************************/
function processBar(){
new Chart("bar-chart",{
  type: "bar",
  data: {
    labels: xAxisBar,
    datasets: [{
	  backgroundColor: "rgba(129, 247, 159, 0.7)", //transparent-green
          borderColor: "rgba(129, 247, 159, 1)", //green
	  borderWidth: 1,
      data: yAxisBar
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
function refreshBar(){
	xAxisBar.length=0;
	yAxisBar.length=0;
	processBar();
}
