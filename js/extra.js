
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


************************************************************************


///////// to add later - add choices in between rounds to improve stats

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

************************************************************************

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


************************************************************************



//
//  ///// alert player to their scores after random function is performed////
// announceStats() {
//  console.log('taste scored at: ' + this.taste );
//  console.log('quality scored at: ' + this.quality);
//  console.log('presentation scored at: ' + this.presentation);
// }




const $tally1 = $('<tally1>');
$('body').append($tally1);
$div.addClass('#GoodBaristaStats');

************************************************************************

// class $Intelligencia {
//   constructor (name, taste, quality, presentation){
//     this.name = 'Intelly';
//     this.taste = [4, 5, 6, 7];
//     this.quality = [4, 5, 6, 7];
//     this.presentation = [4, 5, 6, 7];
//   }
// }


************************************************************************

// battle2 = ()=> {
//   const $div2 = $('<div>');
//   $('body').append($div);
//   $div.addClass('#winner-container');
//   $div.text('Grumpy wins. Sorry, you are out of the competition');
//
// }
// $battle();
           // ADD OPTION TO RESTART // restart();






           // pick up battle button from here|



            //log the winner of the battle in the winner div
           // const addWinner = () => {
           //   const $winnerContainer = $('#winner-container');
           //   const winner = $winnerContainer.val();
           //   console.log(winner);
           //   $('#winner-container').append(winner);
           // }
           //
           // $('.battleButton').on('click', addWinner);
           ///create an element with console.log text from battle button. append to winnerContainer.




           //   to here |


           //
           // ***trying from here
           // $('#battleButton').on('click', ()=> {
           //
           //
           //
           // const $battleButton = $('#battle-button');
           //
           // })
           //***notes taken watching Karolin's lecture****
           // const $div = $('<div>');
           // $div.addClass('battleButton');
           //
           // $('Machine').append($div);
