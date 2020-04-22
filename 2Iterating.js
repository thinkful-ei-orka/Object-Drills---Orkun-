// 2. Iterating over an object's properties
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

let obj = {
    foo: 'good',
    bar: 'point',
    fum: 'my',
    quux: 'brotha',
    spam: 'lemonte'
};

for(map in obj) {
    let key = obj[map];
    console.log(map , ':' ,key)
}
