import { finances } from './dataset.js'
// Debug the dataset is imported correctly.
// console.log(finances)

// This is decoration for the result on console
console.log('F1nancial Analysis')
console.log('-------------------')

// Calculate the total number of months in the dataset
var totalMonths = finances.length
console.log('Total Months: ' + totalMonths)

// Initialize the total net amount of profit/losses
var totalNetProfitLoss = 0

// Initialize the total change in profit/losses for each month
var totalMonthlyChanges = 0

// Initialize the record for the highest monthly profit increase
var maxMonthlyIncrease = [['N/A', 0], 0]
// Initialize the record for the lowest monthly loses decrease
var lowestMonthlyDecrease = [['N/A', 0], 0]
// Initialize a variable to hold the difference in profit/loss for the current month
var currentMonthDifference = ['N/A', 0, 0]

// Loop through each month in the financial dataset
for (let i = 0; i < totalMonths; i++) {
	// Accumulate the net total of profit/loss
	totalNetProfitLoss = totalNetProfitLoss + finances[i][1]

	// Get the difference from each month
	// finances[0][1] - finances[1][1] = difference 1
	// finances[1][1] - finances[2][1] = difference 2
	// finances[2][1] - finances[3][1] = difference 3
	// finances[i][1] - finances[i+1][1] = differences ?
	// -> finances[i][1] - finances[i+1][1] = differences
	// Debug var diffMonth = finances[i][1] - finances[i + 1][1];
	// console.log(diffMonth) -> the differences look good.
	// Calculate the mobthly change in profit/loss
	// to prevent an error of the missing last element
	if (i < totalMonths - 1) {
		// In the western standard of the difference, the direction is usually negative. the equation should swap
		var diffMonth = finances[i + 1][1] - finances[i][1]
		// debug get the all differences (tracking the month to month difference)
		// console.log(diffMonth)
		// -> got the differences with 85 months.
		// let's add up to the total of changes
		totalMonthlyChanges += diffMonth // try shorter equation
	}

	// GET THE HIGHTEST DIFFERENCE
	// the array structure[(date, sales), difference with previous month]
	currentMonthDifference = [finances[i + 1], diffMonth]
	// If current month difference is bigger than previous one with diffMonth
	if (currentMonthDifference[1] > maxMonthlyIncrease[1]) {
		// Update the record for the highest increase in monthly profit
		// the structure of the maxMonthlyIncrease((date, month), diffMonth)
		maxMonthlyIncrease = currentMonthDifference
	}

	// GET THE LOWEST DIFFERENCE
	// Update the record for the lowest decrease in monthly loss
	if (currentMonthDifference[1] < lowestMonthlyDecrease[1]) {
		lowestMonthlyDecrease = currentMonthDifference
	}
}

// Output the total profit/loss
console.log('Total: $' + totalNetProfitLoss)

// Calculate and output the average change in monthly profit/loss
var averageMonthlyChanges = totalMonthlyChanges / (totalMonths - 1)
// Get the 2 decimal
averageMonthlyChanges = Math.round(averageMonthlyChanges * 100) / 100
// Output the average monthly changes;
console.log('Average Change: ' + averageMonthlyChanges)

// Output the highest monthly increase in profit
console.log(
	'Greatest Increase in Profits/Losses: ' +
		maxMonthlyIncrease[0][0] +
		' ($' +
		maxMonthlyIncrease[1] +
		')'
)

// Output the lowest monthly decrease in loss
console.log(
	'Lowest Decrease in Profits/Losses: ' +
		lowestMonthlyDecrease[0][0] +
		' ($' +
		lowestMonthlyDecrease[1] +
		')'
)
