// -----> ES6 Practice <--------

/*
1. let const
2. template string
2.a: use variable
2.b: use object  property
3. arrow function
3.a. with one parameter. will return the number after dividing by 5
3.b. with two parameters. will add two to each number and then multiply the result.
3.c. three parameters. will multiply all three parameters
3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result
4. [home work]: javascript function declaration vs arrow function
5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
6. [challenging] numbers of array. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
[অপশনাল]

১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
*/

// 1
const courseName = 'Complete Web Development with Jhankar Mahbub';
let courseDurion = '6 Month';
courseDurion = '7 Month'

// 2

const tutor = {
    name: 'Jhankar Mahbub',
    role: 'Senior Web Dev',
    age: 40,
    address: 'America'
};

const ourCourse = `Our course name is ${courseName}. It will take ${courseDurion} to be complited. Our instructor name is ${tutor.name} and he is a ${tutor.role}`;
// console.log(ourCourse);

// 3 
// 3.1
const fiveDivided = num => num / 5;
// console.log(fiveDivided(150));

// 3.2
const multiplied = (x, y) => (x + 2) * (y + 2);
// console.log(multiplied(2, 5));

// 3.3
const multiply3 = (x, y, z) => x * y * z;
// console.log(multiply3(2, 6, 8));

// 3.4

const multiply = (x, y) => {
    const first = x + 2;
    const second = y + 2;
    return first * second;
}
// console.log(multiply(2, 5));

// 4

// 5
const numbers = [2, 5, 8, 10, 23, 54, 87];
const multiplyNumbers = numbers.map(number => number * 5);
// console.log(multiplyNumbers);


// 6 

const numbers2 = [5, 10, 12, 23, 14, 56, 25, 89, 99, 77, 88, 100, 44, 33, 2, 3];

const oddNumbers = numbers2.filter(number => number % 2 == 1);
const evenNumbers = numbers2.filter(number => number % 2 == 0)
// console.log(`Odd numbers: ${oddNumbers} and even numbers: ${evenNumbers}`);

// 7
const products = [{
        name: 'Samsung Mobile',
        price: 18500
    },
    {
        name: 'Dell Laptop',
        price: 66500
    },
    {
        name: 'Blue light filter glass',
        price: 800
    },
    {
        name: 'Pocket Router',
        price: 5000
    },
];

const fiveThousand = products.find(product => product.price == 5000);
// console.log(fiveThousand);

// 7.5
/* 
    map() = use for find element from a array. It's do loop by itself, and it will return the result in an array;

    forEach() = it's same like map() but it will not return result
    
    filter() = filter will searching property in the array by using a condition. And it will return all the macthing elements in an array. And if it don't find any thing it will return an empty array.

    find() = find also searching property in the array by using a condition. But if it get any macthing elements, at that moment it will return it without an array. And if it don't find any thing it will return undefined.
*/

// 8

const ami = {
    name: 'Suhag',
    age: 22,
    role: 'coding'
}

const {
    name,
    age
} = ami
// console.log(name, age);

// 9 

const stuff = ['Laptop', 'Mobile', 'Glass', 'Head Phone', 'Pocket Router'];

// const {
//     first,
//     second,
//     third
// } = stuff
// console.log(third);

const [, , three] = stuff;
// console.log(three);



const states = ["Abia", "Adamawa", "Anambra", "Akwa Ibom", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Enugu", "Edo", "Ekiti", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"];

const [first, second, , fourth, , six] = states;

// console.log(first, second, fourth, six);

// 10 

function sum(x, y, z = 7) {
    return x + y + z;
}
// console.log(sum(5, 8));

// 11

const zeroProgrammers = {
    teamName: 'Zero Programers',
    boys: 6,
    girls: 4,
    member: {
        totalMember: 10,
        skills: {
            first: 'HTML',
            second: 'CSS',
            third: 'JS'
        },
        names: ['Suhag', 'Sohan', 'Selim', 'Sakib', 'Amran', 'Din Islam', 'Sanji', 'Jasy', 'Tisha', 'Nite'],
    }
}

console.log(zeroProgrammers.member.skills.first);