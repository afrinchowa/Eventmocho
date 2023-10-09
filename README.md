The feature of my project : -
1.There is 6 event service in my project
2,you can log in and register there
3.there is show detail section
4.When you click the show details if you are register there only then you can see the event details
5.there is also the customer feedback there.





1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer:A: {}
Explanation: In the provided code, there is a typographical error. You declared a variable named greeting but then assigned an empty object to a misspelled variable greetign. The console.log(greetign) statement will print an empty object {} because that's what's assigned to greeting.




2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:C: "12"
Explanation: In the provided code, the sum function takes two parameters a and b and returns their sum. However, when you call sum(1, "2"), JavaScript performs type coercion, converting the number 1 to a string and then concatenating it with the string "2", resulting in the string "12". So, the return value of the function call is "12".





3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError
Answer:A: ['🍕', '🍫', '🥑', '🍔']
Explanation: In the provided code, the food array is not modified by the subsequent operations. The info.favoriteFood property is reassigned to "🍝", but this does not affect the food array. Therefore, when you console.log(food), it will still display the original array ["🍕", "🍫", "🥑", "🍔"].





4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer:B: Hi there, undefined
Explanation: In the provided code, the sayHi function expects a parameter name, which is used to create the greeting message. However, when you call sayHi() without passing an argument, name is undefined inside the function. Therefore, the function returns "Hi there, undefined", where undefined is the value of name in this context.





5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer:
C: 3

Explanation: In the provided code, you initialize a variable count to 0 and have an array nums containing numbers from 0 to 3. You then use the forEach method to iterate through the nums array. Inside the loop, there's a conditional check if (num) which evaluates to true for all elements except 0 because 0 is a falsy value in JavaScript. As a result, the count variable is incremented for all non-zero elements (i.e., 1, 2, and 3), and it becomes 3. Therefore, console.log(count) will output 3.
