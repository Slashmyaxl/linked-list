import nodeMaker from './nodeMaker.js';
import { prependToList, removeListEnd, printList, getListEnd, printListSize, getListHead, findByIndex, findIndex, listContains, insertValueAtIndex } from './linkedlistfns.js';

export default function linkedList(headValue = null) {

    let head = { value: headValue, next: null };

    const append = (newValue, node = head) => {
        if(node.value == null) return head = nodeMaker(newValue);
        else if(node.next == null) {
            node.next = nodeMaker(newValue);
        }
        else {
            node = node.next;
            while(node) return append(newValue, node);
            node = nodeMaker(newValue);
        }
    }

    const removeAt = (index) => {
        if (!head) return console.log('No head index.')
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