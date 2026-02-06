const set = new Set();
console.log("set",set);
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(1);

console.log("after adding",set)

//check

// console.log(set.has(3));
// console.log(set.has(8))


//

// for(char of set){
//     console.log(char)
// }


//convert into array

console.log("set array",[...set]);

//or
console.log("set arra\y",Array.from(set))




// console.log(set.delete(1));

// console.log(set.delete(2));
// console.log(set.delete(100));

// console.log(set)


const arr1= [1,2,3,4,3,2,1,5];
const uniqueArray = [...new Set(arr1)];

console.log(arr1,"arr1");
console.log(uniqueArray,"uniqueArray");


//use cases in auth  Online users  features flag
const visitedUsers = new Set();

visitedUsers.add('users:1')
visitedUsers.add('users:2')
visitedUsers.add('users:3')
visitedUsers.add('users:4')

console.log("visitedUsers",visitedUsers)

console.log(visitedUsers.has('users:1'));


//find uniqu character in string or arr

const string = 'hello';
const uniquCharString = new Set(string);
console.log("uniquCharString",uniquCharString.size);
const arrString = ['hello','world','helo'];

console.log(new Set(arrString));



//check duplicates

function findDupilcates(arr){
   return new Set(arr).size!=arr.length
}

console.log(findDupilcates([2,4,2,3,4]))


//intersection of two array

const arrA = [4,6,2,4,5,1,7];
const arrB = [5,1,2,3,8,0,7,7];

const arrSetA = new Set(arrA);
const intersection = arrB .filter(a=>arrSetA.has(a));

console.log(intersection,"intersection")

console.log("intersection with unique array",[...new Set(intersection)])



        