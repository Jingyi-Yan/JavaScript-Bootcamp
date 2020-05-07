const notes=['Note 1','Note 2','Note 3']

// Remove the item from the end
console.log(notes.pop())

//Push it to the end
notes.push('My new notes')

//Shift, remove first item
console.log(notes.shift())

// Unshift, add in the first item
notes.unshift('at beginning')

console.log(notes)

//Remove an item by index position, or replace them
notes.splice(1,1,"This is the new second item")

console.log(notes)
console.log(`You have ${notes.length} works to do`)

//Call back function
notes.forEach(function (item,index){
    console.log(`The ${index} is ${item}`)
})

for(let count =0;count<=notes.length;count++){
    console.log(`${count+1} is, ${notes[count]}`)
}