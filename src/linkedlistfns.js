import nodeMaker from './nodeMaker.js'

const prependToList = (newValue, head) => {
    let oldHead = head;
    head = nodeMaker(newValue);
    head.next = oldHead;
    return head;
}

function findByIndex (index, temp = head) {
    for(let i = 0; i <= index; i++) {
        if(!temp) return 'Index not in list.'
        else if(i === index) return `Index ${index}: ${temp.value}`
        temp = temp.next;
    }
    return 'Index not found.'
}

const listContains = (valueToCheckFor, temp = head) => {
    if(temp.value == valueToCheckFor) return true
    else if(temp.next) return listContains(valueToCheckFor, temp.next);
    else return false;
}

const findIndex = (valueToCheckFor, temp = head) => {
    let list = printList(temp);
    list = list.split(' -> ');
    for(const value of list) {
        if(value === valueToCheckFor) return `${valueToCheckFor} is at index: ${list.indexOf(value)}`;
    } return null;
}

const printList = function (temp = head, list = []) {
    if (temp) list.push(temp.value);
    else if (!temp) return 'List has no data.'
    while(temp.next) {
        temp = temp.next;
        list.push(temp.value);  
    }
    return list = list.join(' -> ')
}

function getListHead(head) {
    return `List head: ${head.value}`;
}

const printListSize = (temp = head) => {
    let count = 0;
    if(!temp.value) return count;
    if(!temp.next) return count = 1;
    else while(temp.next) {
        count += 1;
        temp = temp.next;
    }
    return `List size: ${count}`
}

const getListEnd = (temp = head) => {
    while(temp.next) {
        temp = temp.next;
    }
    console.log(`List tail: ${temp.value}`);
    return temp
}

const removeListEnd = (temp = head) => {
    let previous;
    if(!temp.next) return temp.value = null;
    else while(temp.next) {
        previous = temp;
        temp = temp.next;
    }
    previous.next = null;
}

const insertValueAtIndex = (value, index, node) => {
    const newNode = nodeMaker(value);
    let oldNode = node;
    if(index < 1) {
        return console.log('Use "prepend" method to replace list head.')
    }
    for(let i = 0; i <= index; i++) {
        if(i === index) {
            oldNode.next = newNode;
            newNode.next = node;
            return;
        }
        oldNode = node;
        if(!node.next) return console.log('No such node in list.');
        else node = node.next 
    }
}

export { prependToList, removeListEnd, printList, getListEnd, printListSize, getListHead, findByIndex, findIndex, listContains, insertValueAtIndex }