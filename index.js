// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driversMore = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
//1) returns all drivers that match the passed in name
//2) returns matching drivers if case does not match but letters do
//3) returns an empty array if there is no match
function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

// 2) returns a driver if beginning provided letters match
// 3) does not return drivers if only middle or ending letters match
// 4) does not return drivers if only middle or ending letters match
function fuzzyMatch(array, string) {
    return array.filter(function (element) {
        return element.startsWith(string)
    })
}


// 2) accesses the data structure to check if name matches
function matchName(array, name) {
    return array.filter(function(driver) {
        return driver.name === name
    })
}
