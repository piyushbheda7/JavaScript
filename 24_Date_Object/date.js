let date = new Date() // type is object

console.log(date)

let otherDate = new Date('2-2-2002 1:50:59') // format is dd-mm-yyyy
console.log(otherDate)

otherDate = new Date('2/23/2002 1:50:59') // format is MM/DD/YYYY
console.log(otherDate)

otherDate = new Date('feb/23/2002 1:50:59') // format is MM/DD/YYYY
console.log(otherDate)

otherDate = new Date('aug 26 2005 8:28:04')
console.log(otherDate)

console.log(otherDate.getDay())
console.log(otherDate.getDate())
console.log(otherDate.getMonth())
console.log(otherDate.getFullYear())
console.log(otherDate.getHours())
console.log(otherDate.getMinutes())
console.log(otherDate.getSeconds())
console.log(otherDate.getTime())

// otherDate.setDate()
// otherDate.setMonth()
// otherDate.setFullYear()
// otherDate.setHours()
// otherDate.setMinutes()
// otherDate.setTime()
console.log(otherDate)