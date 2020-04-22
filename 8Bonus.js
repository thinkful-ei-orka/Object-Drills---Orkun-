// Put this dataset at the top of your program:

// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];
// Write a function findOne() that takes in the following two arguments:

// arr - array of Heroes objects to search through
// query - object with one or more key/value pairs that must exactly match the target Hero
// The first matching result should be returned even if multiple match. If a match isn't found, return null

// With the above data set, you should be able to call findOne with the arguments shown below and return the following results:

// findOne(HEROES, { id: 1 });
// => { id: 1, name: 'Captain America', squad: 'Avengers' }

// findOne(HEROES, { id: 10 });
// => null

// findOne(HEROES, { id: 2, name: 'Aquaman' });
// => null

// findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

// findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }


// const HEROES = [
//       { id: 1, name: 'Captain America', squad: 'Avengers' },
//       { id: 2, name: 'Iron Man', squad: 'Avengers' },
//       { id: 3, name: 'Spiderman', squad: 'Avengers' },
//       { id: 4, name: 'Superman', squad: 'Justice League' },
//       { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//       { id: 6, name: 'Aquaman', squad: 'Justice League' },
//       { id: 7, name: 'Hulk', squad: 'Avengers' },
//     ];

// function findOne(arr, query) {
//    for(let obj of arr) {
//        if(query === obj.id || query === obj.name || query ===obj.squad) {
//            return obj
//        }
//        else {
//        return null
//        }
//    }
// }

// console.log(findOne(HEROES, { squad: 'Justice League' }));
// arr - array of Heroes objects to search through
// query - object with one or more key/value pairs that must exactly match the target Hero
// The first matching result should be returned even if multiple match. If a match isn't found, return null