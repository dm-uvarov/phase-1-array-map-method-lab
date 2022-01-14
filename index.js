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

const titleCased = () => {
  return mapMap(tutorials)
}


function mapMap (arr){
    return arr.map ((t) => {
     return splitMapNjoin(t)
   })

  }




// console.log(titleCased);
// console.log(mapMap(tutorials));
// works as well
// const splitIt = s => s.split(" ");

// works
// function splitIt (s) {
//   return s.split(" ");
  
// }


function splitMapNjoin(s) { 
  return change1Char(s.split(" ")).join(" ")
}

// console.log(splitIt("wy das myhart feelso"));


// console.log(splitMapNjoin("wy das myhart feelso"));
// splitIt("wy das myhart feelso");

//const mappedArr = arr.map((s) => s.toUppercase);


// // works
// function mapIt(arr) {
//   return arr.map((s) => s.toUpperCase())
// }

// // works fine
// function Uppercase1stChar(s) {
//   return s.substring(0,1).toUpperCase() + s.substring(1)
// }

//works as well 
function change1Char(arr) {
  return arr.map((s) => {
    return s.substring(0,1).toUpperCase() + s.substring(1);
  })
}


//onsole.log(Uppercase1stChar("zabaza"));
// //console.log(mapIt(tutorials));
// console.log(change1Char(tutorials).join(" "));
