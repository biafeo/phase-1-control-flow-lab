function scuberGreetingForFeet(number){
  if ((number) < 400) {
    return ('This one is on me!');
  }
   if ((number) < 2000) {
    return ('That will be twenty bucks.');
  }
  if ((number) < 2500) {
    return ('I will gladly take your thirty bucks.');
  }
  if ((number) > 2500) {
    return ('No can do.');
  }
  
}

function ternaryCheckCity(name){
 return name === 'NYC'? 'Ok, sounds good.':'No go.';
}
function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
