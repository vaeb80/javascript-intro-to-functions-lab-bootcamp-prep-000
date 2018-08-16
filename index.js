function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  return console.log(string.toUpperCase())
}
function logWhisper(string){
  return console.log(string.toLowerCase())
}
function sayHiToGrandma(string){
  if (string === "I love you, Grandma."){
    return 'I love you, too.'
  }
}
/*"I can\'t hear you!" if `string` is lowercase'
  
"YES INDEED!" if `string` is uppercase', 

"I love you, too." if `string` is "I love you, Grandma."
}*/
