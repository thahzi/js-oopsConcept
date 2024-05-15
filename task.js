/*1) Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz." */

for(i=1;i<=100;i++){
    if(i%15==0){
        console.log(`FizzBuzz`);
    }
    
    else if(i%5==0){
        console.log(`Buzz`);
    }
   
    else if(i%3==0){
        console.log(`Fizz`);
    }
    else{
        console.log(i);
    }
}

console.log(`__________________________________________`);
console.log(`__________________________________________`);

/*2) Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]   */

str = `dog`
str1 = []

for(i=0;i<str.length;i++){
    for(j=i+1;j<=str.length;j++){
        str1.push(str.slice(i,j))
        // console.log(str1);
    }
}

console.log(str1);
console.log(`__________________________________________`);
console.log(`__________________________________________`);


// 3) Sample data with nested arrays 
const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

console.log(`1) Find the sum of all numbers in the nested arrays.`);  
data1 = data.flat()
sum = data1.reduce((n1,n2)=>n1+n2,0)
console.log(sum);


console.log(`__________________________________________`);


console.log(`2) Find the maximum number in the entire nested array.`);
maxno = data1.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxno);

console.log(`__________________________________________`);

console.log(`3) Find the average of all numbers in the nested arrays.`);
avg = sum/data1.length
console.log(avg);

console.log(`__________________________________________`);

console.log(` 4) Find square of each number in the nested arrays.`);
sq = data.map(n1=>n1.map(n2=>n2**2))
console.log(sq);

console.log(`__________________________________________`);

console.log(` 5) Find all even numbers from the nested arrays.`);
even = data1.filter(n1=>n1%2==0)
console.log(even);

console.log(`__________________________________________`);

console.log(`6) Use reduceRight to concatenate all nested arrays in reverse order.`);

concat = data.reduceRight((n1,n2)=>n1.concat(n2))
console.log(concat);
console.log(`__________________________________________`);

console.log(`7) create a flattened array from the nested arrays.`);
flatarray = data.flat()
console.log(flatarray);
console.log(`__________________________________________`);

console.log(`8) check if the number 5 is present in any of the nested arrays`);
check = data.some(n1=>n1.includes(5))
console.log(check);
console.log(`__________________________________________`);

console.log(`9) create a single string of all numbers separated by a comma. `);
str = ''
for(i of flatarray){
    str += i +','
}
console.log(str);
console.log(`__________________________________________`);

console.log(` 10) Print each number in the nested arrays.`);
data.map(n1=>n1.map(n2=>n2).forEach(item=>console.log(item)))
console.log(`__________________________________________`);

console.log(`11) Sort the nested arrays based on the sum of their numbers.`);
sum = data.map(n1=>n1.reduce((n2,n3)=>n2+n3,0))
console.log(sum);
console.log(`__________________________________________`);

console.log(`12) Use map to get the product of the first and last number in each nested array.`);
mapmult = data.map(n1=>n1[0]*n1[n1.length - 1])
console.log(mapmult);

console.log(`__________________________________________`);

console.log(`13) Use filter to get all arrays where the sum of numbers is greater than 15.`);
sum1 = data.filter(n1=>n1.reduce((n2,n3)=>n2+n3,0)>15)
console.log(sum1);
console.log(`__________________________________________`);

console.log(`14) Use reduce to find the product of all numbers in the nested arrays.`);
prod = data.map(n1=>n1.reduce((n2,n3)=>n2*n3,1))
console.log(prod);
console.log(`__________________________________________`);

console.log(` 15) create an array of square roots of all numbers in the nested arrays.`);
srqrt = data.map(n1=>n1.map(n2=>Math.sqrt(n2)))
console.log(srqrt);
console.log(`__________________________________________`);

console.log(`16) Use includes to check if the number 20 is present in any of the nested arrays.`);
check = data.some(n1=>n1.includes(20))
console.log(check);
console.log(`__________________________________________`);

console.log(`17) Use map to convert each number in the nested arrays to its string representation.`);
convrt = data.map(n1=>n1.map(n2=>n2+' '))
console.log(convrt);
console.log(`__________________________________________`);

console.log(`18) Use filter to get all arrays where the length is greater than 2`);
leng = data.filter(n1=>n1.length>2)
console.log(leng);
console.log(`__________________________________________`);

console.log(`19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.`);
concat = data.reduceRight((n1,n2)=>n1.concat(n2)).sort((n3,n4)=>n4-n3)
console.log(concat);
console.log(`__________________________________________`);

console.log(` 20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.`);
sqrs = Array.from(data.flat()).filter(n1=>n1%2==0).map(n2=>n2**2)
console.log(sqrs);
console.log(`__________________________________________`);

console.log(`21) Sort the nested arrays based on the length of each array.`);
srt = data.sort((n1,n2)=>n1.length-n2.length)
console.log(srt);
console.log(`__________________________________________`);

console.log(`22) Use map to convert each number in the nested arrays to its negative.`);
neg = data.map(n1=>n1.map(n2=>n2*-1))
console.log(neg);
console.log(`__________________________________________`);

console.log(`23) Use filter to get all arrays where the last number is greater than 10.`);
last = data.filter(n1=>n1[n1.length-1]>10)
console.log(last);
console.log(`__________________________________________`);

console.log(` 24) Use reduceRight to get the difference between consecutive numbers in each nested array.`);
concat = data.reduceRight((n1,n2)=>n1.concat(n2))
console.log(concat);
// DIDNT GET THE ANSWER
console.log(`__________________________________________`);

console.log(`25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.`);
sqrs = Array.from(data.flat()).filter(n1=>n1%2==0).map(n2=>Math.sqrt(n2))
console.log(sqrs);
console.log(`__________________________________________`);


console.log(` 26) Use includes to check if the number 15 is present in any of the nested arrays.`);
check = data.some(n1=>n1.includes(15))
console.log(check);
console.log(`__________________________________________`);

console.log(`27) Use map to convert each number in the nested arrays to its absolute value.`);
absol = data.map(n1=>n1.map(n2=>Math.abs(n2)))
console.log(absol);
console.log(`__________________________________________`);

console.log(`28) Use filter to get all arrays where the first number is less than 5.`);
first = data.filter(n1=>n1[0]<5)
console.log(first);

console.log(`__________________________________________`);

console.log(`29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.`);
concat = data.reduceRight((n1,n2)=>n1.concat(n2)).sort((n3,n4)=>n4-n3)
console.log(concat);

console.log(`__________________________________________`);

console.log(`30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.`);
great = Array.from(data.flat()).filter(n1=>n1>5)
console.log(great);
console.log(`__________________________________________`);
console.log(`__________________________________________`);

// 4) Sample data with mixed types in nested arrays
const mixedData = [
    [1, 'apple', 3, 'banana'],
    [4, 'orange', 6, 'grape'],
    [7, 'pear', 9, 'kiwi'],
    [10, 'melon', 12, 'strawberry']
  ];

  
  console.log(`1) Use map to create an array of strings containing both the type and value of each element.`);
  cmbe = mixedData.map(n1=>{
    result = []
    for(i =0;i<n1.length;i+=2){
        if(n1[i+1]){
            result.push(`${n1[i]} ${n1[i+1]}`)
        }
    }
    console.log(result);
  })

console.log(cmbe);

  console.log(`__________________________________________`);

  console.log(`2) Use filter to get all arrays where the number of strings is greater than the number of numbers`);
//   DIDNT GET THE ANSWER
  lng = mixedData.filter(n1=>n1.filter(n2=>typeof n2 == 'string').length > mixedData.filter(n1=>n1.filter(n2=>typeof n2 == 'number').length))
  console.log(lng);
  console.log(`__________________________________________`);

  console.log(` 3) Use reduce to concatenate all strings in the nested arrays into a single sentence.`);
//   Using reduce method didnt get
words = Array.from(mixedData.flat()).filter(n1=>typeof n1 == 'string').reduce((n1,n2)=>n1+' '+n2)
console.log(words);
// str =''
// for(i=0;i<words.length;i++){
//     str += words[i] + ' '
// }
// console.log(str);
  console.log(`__________________________________________`);

  console.log(`4) Use arrayFrom to create an array of unique strings from the nested arrays.`);
  //   DiDNT GET THE ANSWER
  console.log(`__________________________________________`);

  console.log(` 5) Use sort to sort the nested arrays based on the length of strings in each array.`);
//   DIDNT GET THE ANSWER
  srt = mixedData.sort((n1,n2)=>(n1.filter(item=> typeof item == 'string').length)-(n2.filter(item=> typeof item == 'string').length))
  
  console.log(str);
  console.log(`__________________________________________`);

  console.log(` 6) Use map to convert each string in the nested arrays to its uppercase form.`);
  cnvrt = mixedData.map(n1=>n1.map(n2=>typeof n2 == 'string'?n2.toUpperCase():n2))
  console.log(cnvrt);
  console.log(`__________________________________________`);

  console.log(` 7) Use filter to get all arrays where the sum of numbers is greater than 20.`);
  sum = mixedData.map(n1=>n1.filter(n2=>typeof n2 == 'number')).filter(n3=>n3.reduce((n4,n5)=>n4+n5,0)>20)
  console.log(sum);
  console.log(`__________________________________________`);

  console.log(`8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.`);
  concat = mixedData.reduceRight((n1,n2)=>n1.concat(n2)).sort((n3,n4)=>n4-n3)
  console.log(concat);
  console.log(`__________________________________________`);
  

  console.log(`
  9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.`);
  leng = Array.from(mixedData.flat()).filter(n1=>typeof n1 == 'string').map(n1=>n1.length)
  console.log(leng);
  console.log(`__________________________________________`);

  console.log(` 10) Use includes to check if the word 'apple' is present in any of the nested arrays.`);
  check = mixedData.some(n1=>n1.includes('apple'))
  console.log(check);
  console.log(`__________________________________________`);