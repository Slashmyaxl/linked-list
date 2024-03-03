import nodeMaker from "./nodeMaker.js";

export default function hashMap (size) {
    let buckets = new Array(size)

    buckets[5] = nodeMaker('Samson');

    return {
        buckets,
        hash: function(key) {
            let hashCode = 0;
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % size;
            }

            return hashCode
        },
        set: function(key, value) {
            if (buckets[key] && buckets[key].value === value) buckets[key].value = value
            else if (buckets[key]) buckets[key].next = nodeMaker(value);
            else buckets[key] = nodeMaker(value);
        }
        get: function(key) {

        }
    }
}

const myBuckets = hashMap(15);

console.log(myBuckets);
console.log(myBuckets.hash('Danny'))
console.log(myBuckets.hash('Manon'))
console.log(myBuckets.hash('Suzie'))

myBuckets.set(myBuckets.hash('Danny'), 'Danny')
myBuckets.set(myBuckets.hash('Manon'), 'Manon')
myBuckets.set(myBuckets.hash('Manon'), 'Manon')
console.log(myBuckets.buckets)