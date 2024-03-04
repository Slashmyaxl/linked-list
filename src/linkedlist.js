import nodeMaker from './nodeMaker.js';

export default function linkedList(headValue = null) {

    let head = { value: headValue, next: null };

    const append = (newValue, node = head) => {
        if(node.value == null) return head = nodeMaker(newValue);
        else if(node.next == null) node.next = nodeMaker(newValue);
        else {
            node = node.next;
            while(node) return append(newValue, node);
            node = nodeMaker(newValue);
        }
    }

    const removeAt = (index) => {
        if (!head.value) throw new Error('No head index.')
        let oldNode = head;
        let newNode = head.next
        if (index < 1) return head = newNode;
        for (let i = 1; i <= index; i++) {
            if (i === index) {
                newNode = newNode.next;
                return oldNode.next = newNode;
            }
            oldNode = newNode 
            newNode = newNode.next;
        }
    }
    
    return {
        head,
        logHead: () => getListHead(head),
        logTail: () => getListEnd(head),
        print: () => printList(head),
        size: () => printListSize(head),
        at: (index) => findByIndex(index, head),
        pop: () => removeListEnd(head),
        contains: (value) => listContains(value, head),
        find: (value) => findIndex(value, head),
        prepend: (value) => head = prependToList(value, head),
        append,
        insertAt: (value, index) => insertValueAtIndex(value, index, head),
        removeAt
    }
}

const prependToList = (newValue, head) => {
    let oldHead = head;
    head = nodeMaker(newValue);
    head.next = oldHead;
    return head;
}

function findByIndex (index, temp = head) {
    for(let i = 0; i <= index; i++) {
        if(!temp) return 'Index not in list.'
        else if(i === index) return temp
        temp = temp.next;
    }
    return 'Index not found.'
}

const listContains = (valueToCheckFor, temp = head) => {
    if(!temp) return false
    if(temp.value == valueToCheckFor) return true
    if(temp.value[0] && temp.value[0] == valueToCheckFor) return true
    else if(temp.next) return listContains(valueToCheckFor, temp.next);
    else return false;
}

const findIndex = (valueToCheckFor, temp = head, index = 0) => {
    if (!temp.value) return null
    if (temp.value == valueToCheckFor || (temp.value[0] && temp.value[0] == valueToCheckFor)) return index

    return findIndex(valueToCheckFor, temp.next, index + 1)
}

const printList = function (temp = head, list = []) {
    if (!temp.value) return 'List has no data.'
    else list.push(temp.value);
    while(temp.next) {
        temp = temp.next;
        list.push(temp.value);  
    }
    return list = list.join(' -> ')
}

function getListHead(head) {
    return head;
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
    while(temp.next) temp = temp.next;
    return temp.value;
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