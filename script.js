import { finances } from './dataset.js'
// debug the dataset is imported correctly.
// console.log(finances)

console.log('F1nancial Analysis')
console.log('-------------------')

// GET THE TOTAL NUMBER OF THE MONTHS
var totalMonths = finances.length
console.log('Total Months: ' + totalMonths)

// set the current NET
var currentNET = 0

// set the monthlyChanges
var monthlyChanges = 0

// initialize the highest number as profit
var maxIncrease = [['N/A', 0], 0]
// initialize the lowest number as losses
var maxDecrease = [['N/A', 0], 0]
// initialize difference record in the next month with previous record
var nextMonthRecord = ['N/A', 0, 0]

// loop the dataset
for (let i = 0; i < totalMonths; i++) {
	// ADD UP THE EACH MONTH's NET INTO the currentNET TO GET NET TOTAL
	currentNET = currentNET + finances[i][1]

	//get the changes of previous month
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
		//              nextMonthRec         previousMonthRec
		var diffMonth = finances[i + 1][1] - finances[i][1]
		// get the all differences (tracking the month to month difference)
		// console.log(diffMonth)
		// -> got the differences with 85 months.
		// let's add up to the total of changes
		monthlyChanges += diffMonth // try shorter equation
	} else {
		var diffMonth = finances[i][1] - 0
	}

	// GET THE HIGHTEST DIFFERENCE
	// store the diffMonth in the 2nd array in the nextMonth record
	// the array structure[(date, sales), difference with previous month]
	nextMonthRecord = [finances[i + 1], diffMonth]
	// if nextMonthRec is bigger than previous month in the difference month value
	if (nextMonthRecord[1] > maxIncrease[1]) {
		// update the array in maxIncrease((date, month), diffMonth)
		maxIncrease = nextMonthRecord
	}

	// GET THE LOWEST DIFFERENCE
	if (nextMonthRecord[1] < maxDecrease[1]) {
		maxDecrease = nextMonthRecord
	}
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

// M4: show the highest increase from the monthly difference
console.log(
	'Greatest Increase in Profits/Losses: ' +
		maxIncrease[0][0] +
		' ($' +
		maxIncrease[1] +
		')'
)

// show the lowest decrease from the monthly difference
console.log(
	'Lowest Decrease in Profits/Losses: ' +
		maxDecrease[0][0] +
		' ($' +
		maxDecrease[1] +
		')'
)
