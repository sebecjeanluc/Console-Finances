import { finances } from './dataset.js'
// debug the dataset is imported correctly.
// console.log(finances)

console.log('Financial Analysis')
console.log('-------------------')

// get the total number of the months
var totalMonths = finances.length
console.log('Total Months: ' + totalMonths)

// set the current NET
var currentNET = 0

// set the monthlyChanges
var monthlyChanges = 0

// set the highest number as profit
var highestIncreaseDifference = 0

// loop the dataset
for (let i = 0; i < totalMonths; i++) {
	// add up the each month's net to the currentNET
	currentNET = currentNET + finances[i][1]

	//Get the changes of previous month
	// in order to get average change in P/L, you first need to get the difference from each month. So let's show the changes first.
	// finances[0][1] - finances[1][1] = difference 1
	// finances[1][1] - finances[2][1] = difference 2
	// finances[2][1] - finances[3][1] = difference 3
	// finances[i][1] - finances[i+1][1] = differences ?
	// let's see what will result finances[i][1] - finances[i+1][1] = differences ?
	// var diffMonth = finances[i][1] - finances[i + 1][1]; console.log(diffMonth) -> the differences look good.
	// But it throws an error of the last element and so set the if condition
	if (i < totalMonths - 1) {
		// In the western standard of the difference, the direction is usually negative. the equation should swap
		var diffMonth = finances[i + 1][1] - finances[i][1]
		// get the all differences (tracking the month to month difference)
		// console.log(diffMonth)
		// -> got the differences with 85 months.
		// let's add up to the total of changes
		monthlyChanges += diffMonth // try shorter equation
	} else {
		var diffMonth = finances[i][1] - 0
	}

	// Get the highest difference
	// store the difference
	// diff 1st = finances[0][1] - finances[1][1]
	// store the bigger number
	//diff 2 = diff 1st <  finances[1][1] - finances[2][1]
	// continue
}

// show the final total months
var totalNet = currentNET
console.log('Total: $' + totalNet)

// get the totalChangesMonth
// console.log("Total months' change: " + monthlyChanges)
var TotalMonthlyChange = monthlyChanges / (totalMonths - 1)
// get the 2 decimal
TotalMonthlyChange = Math.round(TotalMonthlyChange * 100) / 100
// show the monthly average change;
console.log('Average Change: ' + TotalMonthlyChange)

// show the highest increase from the monthly difference
console.log('Greatest Increase in Profits/Losses: ' + highestIncreaseDifference)
