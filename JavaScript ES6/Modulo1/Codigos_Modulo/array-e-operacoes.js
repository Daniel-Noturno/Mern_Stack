const array = [1,2,3,4,5,8,9];

// .map
const newArray = array.map(function(item, index){
    return item + index;
});

console.log(newArray);

// .reduce
const sum = array.reduce(function(total, next){
    return total + next;
});

console.log(sum);

// .filter
const filter = array.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

//
const find = array.find(function(item){
    return item === 4;
});

console.log(find);