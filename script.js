
// slide 2
// Write your code below 
const vacationSpots = ["London", "Alaska", "GreenLand"];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


//  slide 3
// Write your code below
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  } 



  // slide 4
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0 

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }
  


//   slide 5
  const vacationSpots = ['Bali', 'Paris', 'Tulum'];

  // Write your code below
  for (let i = 0; i < vacationSpots.length; i++ ){
    console.log('I would love to visit ' + vacationSpots[i]);
  }


//   slide 6
// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// slide 7
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

// slide 8
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded
 console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);

// slide 9
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");


// slide 10
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];