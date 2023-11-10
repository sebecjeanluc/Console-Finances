import { finances } from './dataset.js'
// debug the dataset is imported correctly.
// console.log(finances)

console.log('Financial Analysis')
console.log('-------------------')

// get the total number of the months
console.log('Total Months: ' + finances.length)

// set the current NET
var currentNET = 0

// loop the dataset
for (let i = 0; i < finances.length; i++) {
	// add up the each month's net to the currentNET
	currentNET = currentNET + finances[i][1]

	//Get the changes of previous month
	// in order to get average change in P/L, you first need to get the difference from each month. So let's show the changes first.
	// finances[0][1] - finances[1][1] = difference 1
	// finances[1][1] - finances[2][1] = difference 2
	// finances[2][1] - finances[3][1] = difference 3
	// finances[i][1] - finances[i+1][1] = differences ?
	// let's see what will result finances[i][1] - finances[i+1][1] = differences ?
	var result = finances[i][1] - finances[i + 1][1]
	console.log(result)
}
// show the final total months
var totalNet = currentNET
console.log('Total: $' + totalNet)

// set the changes
var monthlyChange = 0
