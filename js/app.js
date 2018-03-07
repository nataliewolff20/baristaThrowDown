

$ (() => {


class GoodBarista {
  constructor (taste, quality, presentation){
    this.taste = [6, 7, 8, 9];
    this.quality = [6, 7, 8, 9];
    this.presentation = [6, 7, 8, 9];
  }
}


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

const Rebel = new GoodBarista
const Grumpy = new BadBarista

/// Choose your barista character///
// do after getting one to work//

//BARISTA BATTLE//

const battle = ()=> {
    alert ('time to battle');
    if ((Rebel.presentation[Math.floor(Math.random()*Rebel.presentation.length)]) +
        (Rebel.taste[Math.floor(Math.random()*Rebel.taste.length)]) +
        (Rebel.quality[Math.floor(Math.random()*Rebel.quality.length)]) <=
       (Grumpy.presentation[Math.floor(Math.random()*Grumpy.presentation.length)])+
       (Grumpy.taste[Math.floor(Math.random()*Grumpy.taste.length)]) +
       (Grumpy.quality[Math.floor(Math.random()*Grumpy.quality.length)]) ) {
      console.log('grumpy wins');
    } else {
      console.log('rebel wins');
    }
}
battle();
           // ADD OPTION TO RESTART // restart();


  //
  //  ///// alert player to their scores after random function is performed////
  // announceStats() {
  //  console.log('taste scored at: ' + this.taste );
  //  console.log('quality scored at: ' + this.quality);
  //  console.log('presentation scored at: ' + this.presentation);
  // }


$










}); // end document
