

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
    this.presentation = [5, 6, 7, 8,];
  }
}

const $Rebel = new $GoodBarista
const $Grumpy = new $BadBarista

/// Choose your barista character///
// do after getting one to work//

//BARISTA BATTLE//

battle = ()=> {
    //alert ('time to battle');
    if (($Rebel.presentation[Math.floor(Math.random()*$Rebel.presentation.length)]) +
        ($Rebel.taste[Math.floor(Math.random()*$Rebel.taste.length)]) +
        ($Rebel.quality[Math.floor(Math.random()*$Rebel.quality.length)]) <=
       ($Grumpy.presentation[Math.floor(Math.random()*$Grumpy.presentation.length)])+
       ($Grumpy.taste[Math.floor(Math.random()*$Grumpy.taste.length)]) +
       ($Grumpy.quality[Math.floor(Math.random()*$Grumpy.quality.length)]) ) {
      console.log('grumpy wins');
      // alert ("Grumpy wins");
      const $div = $('<div>');
      $('body').append($div);
      $div.addClass('#winner-container');
      $div.text('Rebel wins!');

    } else {
      console.log('rebel wins');
      const $div = $('<div>');
      $('body').append($div);
      $div.addClass('#winner-container');
      $div.text('Rebel wins!');
      // alert ("Rebel wins");
    }
}
// $battle();
           // ADD OPTION TO RESTART // restart();



// clickable battle BUTTON


$('.battleButton').on('click', (event) => {
  battle();

})
// pick up battle button from here|



 //log the winner of the battle in the winner div
const addWinner = () => {
  const $winnerContainer = $('#winner-container');
  const winner = $winnerContainer.val();
  console.log(winner);
  $('#winner-container').append(winner);
}

$('.battleButton').on('click', addWinner);
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
  console.log('close modal function is running');
}


//EventListeners
//event listener - How To Play BUTTON
$openBtn.on('click', openModal);

//event listener - close MODAL
$closeBtn.on('click', closeModal);


}); // end document
