let steps = "";
function search()
{
// Javascript implementation of the approach
var V = 4;
var ans = 1000000000;
// Boolean array to check if a node
// has been visited or not
var v = Array(n).fill(false);
// Mark 0th node as visited
v[0] = true;

// Function to find the minimum weight Hamiltonian Cycle
function tsp(graph, currPos, n, count, cost)
{
    // If last node is reached and it has a link
    // to the starting node i.e the source then
    // keep the minimum value out of the total cost
    // of traversal and "ans"
    // Finally return to check for more possible values
    if (count == n && graph[currPos][0]) {
		steps=steps+"min("+ans+","+cost + graph[currPos][0]+")"+"\n"
		steps=steps+"min="+Math.min(ans, cost + graph[currPos][0])+"\n"
        ans = Math.min(ans, cost + graph[currPos][0]);
        return;
    }
	steps=steps+"count="+count+"\n"
	steps=steps+"\n"
    // BACKTRACKING STEP
    // Loop to traverse the adjacency list
    // of currPos node and increasing the count
    // by 1 and cost by graph[currPos][i] value
    for (var i = 0; i < n; i++) {
        if (!v[i] && graph[currPos][i]) {
			steps=steps+"\n"
			steps=steps+"i="+i+"\n"
            // Mark as visited
            v[i] = true;
			steps=steps+"Visited="+i+"\n"
			steps=steps+"cost="+cost+"\n"
            tsp(graph, i, n, count + 1,cost + graph[currPos][i]);
			steps=steps+"\n"
			steps=steps+"Not Visited="+i+"\n" 
            // Mark ith node as unvisited
            v[i] = false;
        }
    }
};

// Driver code
// n is the number of nodes i.e. V
var n = 4;
var X1 = document.getElementById( "X1").value;
X1 = parseInt(X1)
var X2 = document.getElementById( "X2").value;
X2 = parseInt(X2)
var X3 = document.getElementById( "X3").value;
X3 = parseInt(X3)
var X4 = document.getElementById( "X4").value;
X4 = parseInt(X4)
var X5 = document.getElementById( "X5").value;
X5 = parseInt(X5)
var X6 = document.getElementById( "X6").value;
X6 = parseInt(X6)
var X7 = document.getElementById( "X7").value;
X7 = parseInt(X7)
var X8 = document.getElementById( "X8").value;
X8 = parseInt(X8)
var X9 = document.getElementById( "X9").value;
X9 = parseInt(X9)
var X10 = document.getElementById( "X10").value;
X10 = parseInt(X10)
var X11 = document.getElementById( "X11").value;
X11 = parseInt(X11)
let X12 = document.getElementById( "X12").value;
X12 = parseInt(X12)
var X13 = document.getElementById( "X13").value;
X13 = parseInt(X13)
var X14 = document.getElementById( "X14").value;
X14 = parseInt(X14)
var X15 = document.getElementById( "X15").value;
X15 = parseInt(X15)
var X16 = document.getElementById( "X16").value;
X16 = parseInt(X16)

var graph = [
    [ X1, X2, X3, X4 ],
    [ X5, X6, X7, X8 ],
    [ X9, X10, X11, X12 ],
    [ X13, X14, X15, X16 ]
];



// Find the minimum weight Hamiltonian Cycle
tsp(graph, 0, n, 1, 0);
console.log(ans);
steps=steps+"\n"
steps=steps+"Output="+ans+"\n"


    ans = steps;
    document.getElementById( "outputbox").value = ans;
	
}

