function scuberGreetingForFeet( distance ){
  if ( distance <=400 ){
    return 'This one is on me!'
  }
  else if ( distance >2000 && distance < 2500 ){
    return 'I will gladly take your thirty bucks.'
  }
  else if ( distance > 2500){
    return 'No can do.'
  }
}

//scuberGreetingForFeet(199);

function ternaryCheckCity( destination ){
  if ( destination == 'NYC'){
    return 'Ok, sounds good.';
  }
  else if ( destination !== 'NYC') {
    return 'No go.';
  }
}

//console.log (ternaryCheckCity('NYC'));

function switchOnCharmFromTip( tip ){
  if (tip == 'generous'){
    return 'Thank you so much.';
  }
  else if (tip == 'not as generous'){
    return 'Thank you.';
  }
  else {
    return 'Bye.';
  }
}

//console.log( switchOnCharmFromTip('thanks for everything'));