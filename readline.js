const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function
// window.setTimeout(() => {
//   alert('HAMMERTIME');
// }, 5000);


// window.setTimeout(function(){
//   if (first === undefined) {
//     reader.question('Would you like some biscuits?', (res) => {
//       second = res;
//       console.log(`You replied ${res}.`);
//     });
//   }
// }, 2000);

// function teaAndBiscuits () {
//   let first, second;

//   reader.question('Would you like some tea?', (res) => {
//     first = res;
//     console.log(`You replied ${res}.`);

//     if (first) {
//       reader.question('Would you like some biscuits?', (res) => {
//         second = res;
//         console.log(`You replied ${res}.`);

//         if (second) {
//           const firstRes = (first === 'yes') ? 'do' : 'don\'t';
//           const secondRes = (second === 'yes') ? 'do' : 'don\'t';
//           console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
//         }
//       });
//     }
//   });

  //  reader.question('Would you like some biscuits?', (res) => {
  //     second = res;
  //     console.log(`You replied ${res}.`);
  //   });

//   reader.close();
// }

function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);
  });

  function runNext (res) {
    reader.question('Would you like some biscuits?', (res) => {
      second = res;
      console.log(`You replied ${res}.`);
    });
  }

  function finish (res) {
    const firstRes = (first === 'yes') ? 'do' : 'don\'t';
    const secondRes = (second === 'yes') ? 'do' : 'don\'t';
    console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
    reader.close();  
  }

  setTimeout(runNext, 0);
  setTimeout(finish, 0);

}

teaAndBiscuits();

// while (first === undefined) {
  
//     if (first !== undefined) {
//       break;
//     }
//   }
// }

// while 

// const readline = require('readline');

// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)

//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
// });

// console.log("Last program line");


// practice for A05
Array.prototype.uniq = function () {
  let uniqueArray = [];

  this.forEach(element => {
    if (!uniqueArray.include(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray
}

// Array.prototype.twoSum = () => {
//   let pairs = []
//   const indexHash = {};

//   this.forEach((ele, index) => {
//     if (indexHash[ele * -1]) {
//       const newPairs = indexHash[ele * -1].map((prevIndex) => [prevIndex, index]);
//       pairs = pairs.concat(newPairs);
//     }  

//     indexHash[el] ? indexHash[el].push(idx) : indexHash[el] = [idx];
//   });

//   return pairs;

// }

Array.prototype.mytranspose = function () {
  const result = [];

  for (let i = 0; this.length; i++) {
    const subarr = [];
    for (let j = 0; this.length; j++) {
      subarr.push(this[j][i]);
    }
    result.push(subarr);
  }
  return result;
};

// look at this later to figure out if you can get the index
Array.prototype.getIndex = () => {
  const result = [];

  for (let i in this) {
    result.push(i);
  }

  return result;
};
// look at later
Array.prototype.transpose = () => {

  const columns = Array.from( 
    { length: this[0].length }, 
    () => Array.from( { length: this.length })
  );

  for (let i = 0; this.length; i++) {
    for (let j = 0; this[i].length; j++) {
      columns[j][i] = this[i][j]; 
    }
  }

  return columns;
};

const NUMS = [1,2,3,4,5,6];

Array.prototype.myEach = (callback) => {
  for (let i in this) {
    callback(this[i]);
  }
}

NUMS.myEach((callback) => {
   
})


// from the project in class
Array.prototype.bubbleSort = function () {
  let isSorted = false;

  while(!isSorted) {
    isSorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        isSorted = false;
      }
    }
  }
  return this;
}

// this does not work. why???
Array.prototype.bubbleSort = () => {
  let isSorted = false;

  while(!isSorted) {
    isSorted = true;

    for(let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        isSorted = false;
      }
    }
  }

  return this;
}



