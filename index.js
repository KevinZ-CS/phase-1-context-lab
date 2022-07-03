/* Your Code Here */

function createEmployeeRecord(testEmployee) {
    return {  
    firstName: testEmployee[0],
    familyName: testEmployee[1],
    title: testEmployee[2],
    payPerHour: testEmployee [3],
    timeInEvents: [],
    timeOutEvents: [],
    } }

function createEmployeeRecords(twoRows) {
    return twoRows.map(row => createEmployeeRecord(row))
    }

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    let Obj ={ 
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date,
    }
   let newEvent = this.timeInEvents
   newEvent.push(Obj)
    return this
 }

 function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(' ')
    let Obj ={ 
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date,
    }
   let newEvent = this.timeOutEvents
   newEvent.push(Obj)
    return this
 }

 function hoursWorkedOnDate(dateStamp) {
    const timeIn = this.timeInEvents.find(event => event.date === dateStamp)
    const timeOut = this.timeOutEvents.find(event => event.date === dateStamp)

    return (timeOut.hour - timeIn.hour)/100
 }

 function wagesEarnedOnDate(dateStamp) {
    const hours = hoursWorkedOnDate.call(this, dateStamp)
    return this.payPerHour * hours
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(employees, firstNameString) {
    return employees.find(emp => emp.firstName === firstNameString)
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.map(employee => allWagesFor.call(employee)).reduce((currentValue, total) => currentValue + total)
}