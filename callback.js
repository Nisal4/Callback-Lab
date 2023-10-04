// Exercise 1
let timerId = setTimeout(function writeDing() {
    console.log('Ding!');
}, 3000);


// Exercise 2
const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

function length(a , b) {
    return a.length - b.length;
}

words.sort(length);

console.log(words);


// Exercise 3
const longWords = words.filter(function(word){
    return word.length >= 7;
});

console.log(longWords);


// Exercise 4
function forEach(array , callback) {
    for (let i=0; i < array.length; i++) {
        callback(array[i] , i);
    }
}

const colors = ['red', 'green', 'blue', 'purple'];

function log(elem, idx) {
  console.log(`Index: ${idx} / Element Value: ${elem}`);
}
forEach(colors , log);


// Exercise 5
function step1(cb) {
    setTimeout(function() {
      console.log('STEP 1 COMPLETE');
      cb()
    }, 750);
}
  
function step2(cb) {
    setTimeout(function() {
      console.log('STEP 2 COMPLETE');
      cb()
    }, 500);
}
      
function step3(cb) {
    setTimeout(function() {
      console.log('STEP 3 COMPLETE');
      cb()
    }, 250);
}


step1(function() {
    step2(function() {
        step3(function() {
            console.log("FINISHED");
        });
    });
});


// Bonus
function countdown(seconds) {
    const intervalId = setInterval(function() {
        if (seconds < 0) {
            clearInterval(intervalId);
        } else {
            console.log(seconds);
            seconds--;
        }
    }, 1000);
}

countdown(3);