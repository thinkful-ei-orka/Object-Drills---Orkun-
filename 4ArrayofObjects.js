// 4. Arrays of objects
// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

let obj1 = {
    name: 'orkun',
    jobTitle: 'boss'
}

let obj2 = {
    name: 'lemonte',
    jobTitle: 'the son of the boss'
}

let obj3 = {
    name: 'vepa',
    jobTitle: 'lil boy'
}

let arr = [obj1, obj2, obj3];
for(x in arr){
    let object = arr[x]
    let name = object.name
    let jobTitle = object.jobTitle
    console.log(name, ':', jobTitle)
}
