function shout(string){
  return string.toUpperCase();
}

function logShout(string){
  return console.log(shout(string));
}

function whisper(string){
  return string.toLowerCase();
}
function logWhisper(string){
  return console.log(whisper(string));
}

function sayHiToGrandma(string){
  if(string == "I love you, Grandma.")
    return "I love you, too."
  else if(string == shout(string))
    return "YES INDEED!";
  else if(string == whisper(string))
    return "I can't hear you!";
    //retur
    return "idk what to put :o???"
}