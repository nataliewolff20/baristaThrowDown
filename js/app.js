
/// Barista Good Guy Options ///

//
// class Rebel {
//   constructor (taste, quality, presentation){
//     this.taste = 6;
//     this.quality = 8;
//     this.presentation = 7;
//   }
// }
//
// class CoffeeBoy {
//   constructor (taste, quality, presentation){
//     this.taste = 7;
//     this.quality = 8;
//     this.presentation = 6;
//   }
// }
//
// class Shane {
//   constructor (taste, quality, presentation){
//     this.taste = 6;
//     this.quality = 7;
//     this.presentation = 8;
//   }
// }

//get 1 barista to work first. then come back and add options to choose.

$ (() => {


let winner;

class GoodBarista {
  constructor (taste, quality, presentation){
    this.taste = [6, 7, 8, 9];
    this.quality = [6, 7, 8, 9];
    this.presentation = [6, 7, 8, 9];
  }
}

//////********add this option if we have time***********///////
// // player makes the right choice - improves stats//
// choiceRight() {
//     this.taste +=2;
//     this.quality +=1;
//     this.presentation +=2;
// }
//
// // player makes the wrong choice - stats go down//
// choiceWrong() {
//     this.taste -= 1;
//     this.quality -= 2;
//     this.presentation -=2;
// }

const Rebel = new GoodBarista


console.log(Rebel);

/// Barista Bad Guys ///
/// will change by assigning newBadBarista after each battle

class BadBarista {
  constructor (name, taste, quality, presentation){
    this.name = 'Grumpy';
    this.taste = [6, 7, 8, 9];
    this.quality = [6, 7, 8, 9];
    this.presentation = [5, 6, 7, 8,];
  }
}

const Grumpy = new BadBarista

/// Choose your barista character///
// do after getting one to work//

//BARISTA BATTLE//

const battle = ()=> {
    if ((Rebel.presentation[Math.floor(Math.random()*Rebel.presentation.length)]) <= (Grumpy.presentation[Math.floor(Math.random()*Grumpy.presentation.length)])
) {
      console.log('grumpy wins');
    } else {
      console.log('rebel wins');
    }
  // console.log(Rebel.presentation);
}
battle();






///////*******take one. trying again with random feature***********/////
/// if Good B taste + quality + presentation > Bad B taste + quality + pres = move to next round.

// const battle = ()=>{
//   alert ('Time to throw down!');
//   if (GoodBarista this.taste + this.quality + this.presentation >= BadBarista this.taste + this.quality + this.presentation) {
//     choice1 ();
//   }else if (GoodBarista this.taste + this.quality + this.presentation <= BadBarista this.taste + this.quality + this.presentation){
//     alert ('Sorry, you lost this round and you are out of the competition.')
//                 // ADD OPTION TO RESTART // restart();
//   }
// }




const start = () => {
  choice1();
}


/// Choice 1 ///
const choice1 = ()=> {
  prompt('While you wait for your turn to compete, you are offered a beverage. You can have some water or a beer. Which would you like?', 'water / beer')
  if(choice === 'water'){
    alert('Good call. Stay hydrated and focused.')
    choiceRight();

  } else if (choice === 'beer'){
    alert('Nervous, eh? This will help take the edge off.')
    choiceWrong();
  }
}

/// Choice 2 ///
const choice2 = ()=> {
  prompt('You won! Way to go! While you are waiting for your next turn you are offered a snack. You can have a banana or a donut. Which would you like?', 'banana / donut')
  if(choice === 'banana'){
    alert('Potassium. Always a good choice.')
    choiceRight();
  } else if (choice === 'donut'){
    alert('They are hard to resist. I hope the sugar crash doesn\'t come during your next round!')
    choiceWrong();
  }
}

/// Choice 3 ///
const choice3 = ()=> {
  prompt('Ok. Here we go. Final battle for the big prize! You are offered a drink again before you begin. You can have regular coffee or decaf. Which would you like?', 'regular coffee / decaf')
  if(choice === 'regular coffee'){
    alert('Boom. Coffee. Just what you needed. Let\'s go win this thing!')
    choiceRight();
  }else if (choice === 'decaf'){
    alert('And you just fell asleep...')
    choiceWrong();
  }
}











}); // end document
