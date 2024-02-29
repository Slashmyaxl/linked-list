import linkedList from './linkedlist.js';

const lamoraList = linkedList();
const alphaNumList = linkedList('A');

alphaNumList.append('B');
alphaNumList.append('C');

console.log(alphaNumList.print());
alphaNumList.prepend('1');

console.log(alphaNumList.print());

alphaNumList.append('D');
alphaNumList.prepend('2');
alphaNumList.prepend('3');
alphaNumList.append('E');

/*
console.log(alphaNumList.logHead());
console.log(alphaNumList.print());
console.log(alphaNumList.size());
alphaNumList.logTail();
*/

lamoraList.append('Father Chains');
lamoraList.append('Locke');
lamoraList.append('Sabetha');
lamoraList.append('Jean');
lamoraList.insertAt('Galdo', 3);

console.log(lamoraList.logHead());
console.log(lamoraList.print());

console.log(lamoraList.at(4));
console.log(lamoraList.find('Sabetha'));
lamoraList.removeAt(1);
console.log(lamoraList.find('Sabetha'));
//lamoraList.removeAt(5);
//lamoraList.removeAt(2);

console.log(lamoraList.print())