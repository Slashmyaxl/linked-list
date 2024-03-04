import linkedList from "./linkedlist.js";

export default function hashMap (size) {
    let buckets = new Array(size);

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
            if (!buckets[index]) buckets[index] = linkedList([key, value]);
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
                buckets[index].removeAt(linkedIndex);
                return true
            }
            return false
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


console.log(myBuckets.get('Locke'));
console.log(myBuckets.remove('Locke'));
console.log(myBuckets.buckets[15])
console.log(myBuckets.has('Locke'));

