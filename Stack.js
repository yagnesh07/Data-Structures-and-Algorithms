// Stacks

// functions: push, pop, peek, length

// word is palindrome or not

var letters = [];

var word = "racecar";

var rword = "";

for(let i = 0; i < word.length; i++) {
    letters.push(word[i])
} 

for(let j = 0; j < word.length; j++) {
    rword += letters.pop()
}

if(word === rword) {
    console.log("word is palindrome")
} else {
    console.log("not a palindrome!")
}