import linkedList from "./linkedlist.js";

export default function hashMap (size) {
    let buckets = new Array(size);
    let loadFactor = 0.75;

    const hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % size;
            }

        return hashCode
    }

    return {
        buckets,
        set: function(key, value) {
            const index = hash(key);
            if (!buckets[index] || !buckets[index].head.value) buckets[index] = linkedList([key, value]);
            else if (buckets[index].contains(key)) {
                const linkedIndex = buckets[index].find(key);
                buckets[index].at(linkedIndex).value = [key, value];
            }
            else buckets[index].append([key, value]);
        },
        get: function(key) {
            const index = hash(key);
            if (buckets[index].contains(key)) {
                const keyIndex = buckets[index].find(key);
                return buckets[index].at(keyIndex).value[1];
            }
            return null
        },
        has: function (key) {
            const index = hash(key);
            if (buckets[index].contains(key)) return true
            return false
        },
        remove: function (key) {
            const index = hash(key);
            if (buckets[index].contains(key)) {
                const linkedIndex = buckets[index].find(key);
                if (linkedIndex === 0) buckets[index].pop();
                else buckets[index].removeAt(linkedIndex);
                return true
            }
            return false
        },
        length: () => {
            let count = 0;
            buckets.forEach(bucket => {
                count += bucket.size();
            })
            return count
        },
        clear: () => {
            buckets.forEach(bucket => {
                while(bucket.head.value) bucket.pop();
            })
        },
        keys: () => {
            const listOfKeys = [];
            buckets.forEach(item => {
                if(item.size() < 1) return
                let temp = item.head
                for(let i = 0; i < item.size(); i++) {
                    listOfKeys.push(temp.value[0]);
                    temp = temp.next;
                }
            })
            return listOfKeys;
        },
        values: () => {
            const listOfValues = [];
            buckets.forEach(item => {
                if(item.size() < 1) return
                let temp = item.head
                for(let i = 0; i < item.size(); i++) {
                    listOfValues.push(temp.value[1]);
                    temp = temp.next;
                }
            })
            return listOfValues;
        },
        entries: () => {
            const listOfEntries = [];
            buckets.forEach(item => {
                if(item.size() < 1) return
                let temp = item.head
                for(let i = 0; i < item.size(); i++) {
                    listOfEntries.push(temp.value);
                    temp = temp.next;
                }
            })
            return listOfEntries;
        }
    }
}

const myBuckets = hashMap(15);


myBuckets.set('Suzi', 'Par');
myBuckets.set('Dara', 'Lara');
myBuckets.set('Suzi', 'Lara');
myBuckets.set('Terry', 'Brad');
myBuckets.set('Joe', 'Gren');
myBuckets.set('Locke', 'Lamora');

myBuckets.set('Father', 'Chains');
myBuckets.set('Lynn', 'Swann');
myBuckets.set('Cake', 'helps others');
myBuckets.set('Toby', 'plays instruments');
myBuckets.set('Carlos', 'has an office');

myBuckets.set('Cake', 'is delicious');

myBuckets.remove('Locke')
