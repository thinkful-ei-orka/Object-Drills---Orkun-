// Properties that aren't there
// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.


arr = [
    {name: 'orkun', jobTitle:'big bitch', boss:'lemonte'},
    {name: 'clement', jobTitle:'main bitch'},
    {name: 'vepa', jobTitle:'lil bitch', boss:'lemonte'}
]

for(y in arr) {
    if(arr[y].boss === undefined) {
        console.log(`${arr[y].jobTitle} ${arr[y].name} doesn't report to anybody.`)
    }
    else { 
        console.log(`${arr[y].jobTitle} ${arr[y].name} reports to ${arr[y].boss}.`)
    }
}