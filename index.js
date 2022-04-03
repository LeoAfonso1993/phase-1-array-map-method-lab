const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = () => {
  return tutorials
}*/

/*function wordToUpper(array){
  for (i = 0; i < array.length; i++){
    for (word of array[i]){
      word[0].toUpperCase()
      console.log(array[i])
    }
  }
}

console.log(wordToUpper(tutorials))*/


/*const titleCased = function(array) {
   const sent = array.map(function(title) {
     const words = title.split(" ")
     for (let i = 0; i < words.length; i ++) {
       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
     }
     return title = words.join(" ")
   }
  )
}*/

/*const titleCased = tutorials.map(function(title){
  const breakdown = title.split(" ")
  for (let i = 0; i < breakdown.length; i++) {
    breakdown[i] = breakdown[i].charAt(0).toUpperCase() + breakdown[i].slice(1)
  }
  return title = breakdown.join(" ")
})
*/

/*function iter(array){
  for (element of array){
    const str = element.split(" ")
    for(word of str){
      const str2 = word.toString().charAt(0).toUpperCase() + word.slice(1)
      const jun = str2
      console.log(jun)
    }
  } 
}*/


function titleCased(){
  const applyConc = tutorials.map(sentence => {
    const newArr = sentence.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");

    return newArr; 
  })
  return applyConc;
}

console.log(titleCased(tutorials))
