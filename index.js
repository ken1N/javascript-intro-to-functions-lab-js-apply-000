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
  else if(string == string.toUpperCase)
    return "YES INDEED!";
  else
    return "I can't hear you!";
}