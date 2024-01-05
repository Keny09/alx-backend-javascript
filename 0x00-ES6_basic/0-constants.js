function taskFirst() {
 const task = 'I prefer const when I can.';
 return task;
}

function taskNext() {
 let combination = 'But sometimes let';
 combination += getLast();

 return combination;
}

function getLast() {
 return ' is okay';
}

module.exports = {
 taskFirst,
 taskNext,
};
