

$ (() => {

class $GoodBarista {
  constructor (taste, quality, presentation){
    this.taste = [6, 7, 8, 9];
    this.quality = [6, 7, 8, 9];
    this.presentation = [6, 7, 8, 9];
  }
}

/// Barista Bad Guys ///
/// will change by assigning newBadBarista after each battle

class $BadBarista {
  constructor (name, taste, quality, presentation){
    this.name = 'Grumpy';
    this.taste = [6, 7, 8, 9];
    this.quality = [6, 7, 8, 9];
    this.presentation = [6, 7, 8, 9];
  }
}
// class $Intelligencia {
//   constructor (name, taste, quality, presentation){
//     this.name = 'Intelly';
//     this.taste = [4, 5, 6, 7];
//     this.quality = [4, 5, 6, 7];
//     this.presentation = [4, 5, 6, 7];
//   }
// }


const $Rebel = new $GoodBarista
const $Grumpy = new $BadBarista
// const $Intelly = new $Intelligencia
/// Choose your barista character///
// do after getting one to work//

//BARISTA BATTLE//

battle = ()=> {
    //assign random numbers so you can recall them later in div.text
  let rebelpresentation = ($Rebel.presentation[Math.floor(Math.random()*$Rebel.presentation.length)]);
  let rebeltaste =
  ($Rebel.taste[Math.floor(Math.random()*$Rebel.taste.length)]);
  let rebelquality =
  ($Rebel.quality[Math.floor(Math.random()*$Rebel.quality.length)]);
  let grumpypresentation =
  ($Grumpy.presentation[Math.floor(Math.random()*$Grumpy.presentation.length)]);
  let grumpytaste =
  ($Grumpy.taste[Math.floor(Math.random()*$Grumpy.taste.length)]);
  let grumpyquality =
  ($Grumpy.quality[Math.floor(Math.random()*$Grumpy.quality.length)]);

    if (($Rebel.presentation[Math.floor(Math.random()*$Rebel.presentation.length)]) +
        ($Rebel.taste[Math.floor(Math.random()*$Rebel.taste.length)]) +
        ($Rebel.quality[Math.floor(Math.random()*$Rebel.quality.length)]) <=
       ($Grumpy.presentation[Math.floor(Math.random()*$Grumpy.presentation.length)])+
       ($Grumpy.taste[Math.floor(Math.random()*$Grumpy.taste.length)]) +
       ($Grumpy.quality[Math.floor(Math.random()*$Grumpy.quality.length)]) ) {
      console.log('grumpy wins');
      const $div = $('<div>');
      $('body').append($div);
      $div.addClass('#winner-container');
      $div.css ('font-size','30px'). text('Your score is : Taste- ' + rebelpresentation + ' Quality- ' + rebelquality + ' Presentation- ' +rebelpresentation + '\nGrumpy\'s score is : Taste- ' + grumpytaste + ' Quality- ' + grumpyquality + 'Presentation' + grumpypresentation+
      ' Grumpy wins. Sorry, you are out of the competition. Try again? Just press the BATTLE button!  ');




    } else {
      console.log('rebel wins');
      const $div = $('<div>');
      $('body').append($div);
      $div.addClass('#winner-container');
      $div.css ('font-size', '30px').css ('color', 'pink').text('Your score is : Taste- ' + rebelpresentation + ' Quality- ' + rebelquality + ' Presentation- ' +rebelpresentation+  ' Grumpy\'s score is : Taste- ' + grumpytaste + ' Quality- ' + grumpyquality + ' Presentation' + grumpypresentation+' Rebel wins! Rematch? Just press the BATTLE button!');


    }
}

// battle2 = ()=> {
//   const $div2 = $('<div>');
//   $('body').append($div);
//   $div.addClass('#winner-container');
//   $div.text('Grumpy wins. Sorry, you are out of the competition');
//
// }
// $battle();
           // ADD OPTION TO RESTART // restart();



// clickable battle BUTTON


$('.battleButton').on('click', (event) => {
  battle();


})
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


//////////MODAL//////////
//grab How To Play BUTTON
const $openBtn = $('#openModal')
//grab the modal
const $modal = $('#modal');
//grab the close BUTTON
const $closeBtn = $('#close');

//EventHandlers
//open modal
const openModal = ()=>{
  $modal.css('display','block');
  // $modal.show();
}

//close modal
const closeModal = () =>{
  $modal.css('display','none');
  // $modal.hide();

}


//EventListeners
//event listener - How To Play BUTTON
$openBtn.on('click', openModal);

//event listener - close MODAL
$closeBtn.on('click', closeModal);


}); // end document
