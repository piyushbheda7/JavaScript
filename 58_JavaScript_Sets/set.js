// set stores unique values ;
const mySet = new Set()
console.log(typeof mySet);

console.log('The set looks lik :', mySet);

mySet.add('this')
mySet.add('My Name')
mySet.add('this') // it caught that it is repeat so it will not add
console.log(mySet);

mySet.add('that')
mySet.add(23)
mySet.add(34)
mySet.add(34)
mySet.add(true)
mySet.add(function(){
    return `this is my function` ;
})
mySet.add(new Date().getMinutes())

console.log(mySet)

let set = new Set([1 , 45 , 45 , false , 'this' , 'what'])
console.log(set)

console.log(set.size);

console.log(set.has(false));

console.log(set.keys());

console.log(`is set have 'what' element`, set.has('what'));

set.delete('what')

console.log('updated set ' ,set);

// iterate
for (const iterator of set) {
    console.log(iterator);
    
}

set.forEach((item)=>{
    console.log('items is ',item);
    
})

let arrayset = Array.from(set)
console.log('array is ',arrayset);
