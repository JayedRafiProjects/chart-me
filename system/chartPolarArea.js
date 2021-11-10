/*******************************
 * Project: Chart Me
 *
 * Purpose: Polar area chart
 * Language: JavaScript
 * Date: November 2021
 * 
 * Dev: Jayed Rafi
 *
*******************************/

//Global variables
var xAxisP = []; //initially empty data set
var yAxisP = []; //initially empty value
//initially I set 20 colours. You add more if your data-set>20
var pColor = ["#dcae18","#fa7703","#b4c89a","#48218b","#f2dea5","#7cb0b2","#26a74c","#2fb8da","#f761fe","#a18bc0",
			 "#90f483","#ecfec8","#1e31ea","#e397a5","#3361fd","#7a5136","#15b2d0","#15b2d0","#78d435","#348c80"];

/*******************************
* randomize array using Durstenfeld shuffle algorithm
* Picks one element randomly and exclude it on next iteration
*******************************/
function randomize(arr){
	var i;
	for(i=pieColor.length-1; i>0; i--){
		var r = Math.floor(Math.random()*(i+1));
		var temporary = arr[i];
		arr[i]=arr[r];
		arr[r]=temporary;
	}
}

/*******************************
* Takes the values from user input
* Assigns those values into xAxis and yAxis
* randomize the colors inside the array itself
*******************************/
function inputPointsP() {
  var xVal= document.getElementById('x-axis-p').value; //x axis
  var yVal = document.getElementById('y-axis-p').value; //y axis
  xAxisP.push(xVal);
  yAxisP.push(yVal);
  randomize(pColor);
  return false;
}

/*******************************
* Makes the cart visible
* Draws the chart based on xAxis (label) & yAxis
*******************************/
function processP(){
new Chart("polar-chart",{
  type: "polarArea",
  data: {
    labels: xAxisP,
    datasets: [{
      backgroundColor: pColor,
		hoverOffset: 5,
      data: yAxisP
    }]
  }
});
}

/*******************************
* Makes both xAxis and yAxis empty
* Visualize the empty space
*******************************/
function refreshP(){
	xAxisP.length=0;
	yAxisP.length=0;
	processP();
}
