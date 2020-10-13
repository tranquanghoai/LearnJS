
var courses = [
    {
        id: 1,
        name: 'java',
        coin: 250
    },

    {
        id: 2,
        name: 'html',
        coin: 0
    },

    {
        id: 3,
        name: 'ruby',
        coin: 0
    },

    {
        id: 4,
        name: 'php',
        coin: 400
    }
];

var isFree;
isFree = courses.every(function (course, index) {
    return course.coin === 0;
});
console.log(isFree);


// -----------FOR EACH--------
// courses.forEach(function(course,index) {
//     console.log(index, course);
// });


























// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (var i = 0; i < myArray.length; i++) {

//     for (var j = 0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }

// }




// DOI TUONG DATE

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);






//  OBJECT CONSTRUCTOR 
// function User(firstname, lastname, avatar) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.avatar = avatar;
// }
// var author = new User('chi', 'tran', 'avatar');
// var student = new User('nguyen', ' abc', 'avatar');

// author.tieude = 'Bai hoc hn la...';
// student.comment = 'hay qua...';

// console.log(author);
// console.log(student);




// function showmassage() {
//     function showmassage2() {
//         console.log('massage 2');
//     }
//     showmassage2();
// }

// showmassage();


// var a = 5 // number
// var name = "Hoai" // string
// var adult = true // boolean




// var person = {
//     name: 'Hoai',
//     age: 20,
//     female: true
// }

// console.log(person.name)






// var name = 'Hoai'
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// console.log(name.length)

// console.log(typeof person)

// function sum(a, b) {
//     return a + b
// }

// var tong = sum(1, 2)
// console.log(tong)

// int sum(int a, int b) {
//     return 10
// }





// var a = 1 + 2
// var b = 1 + '2'
// var c = 1 + 2 + ' hoai'
// console.log(c)





// var array = [
//     {
//         name: 'hoai',
//         age: 23
//     },
//     {
//         name: 'chi',
//         age: 17
//     },
//     {
//         name: 'nhan',
//         age: 30
//     }
// ]


// var member = array.find(function (member, index) {
//     return member.name == 'chi';
// })
// console.log(member);

// array.forEach(function (member, index) {
//     console.log(index, member);
// });



// //console.log(array[1].age)

// var maxAge = 0

// for (var i = 0, i; i < array.length; i++) {


//     //      var member = array[i]
//     //      var age = member.age


//     if (array[i].age < array[i + 1].age) {

//         maxAge = array[i + 1].age

//     }


// }

//console.log(maxAge)



























// console.log(array.length)

// var sum = 0
// for (var i = 0; i < array.length; i++) {
//     var member = array[i]
//     var age = member.age
//     sum = sum + age
// }

// console.log(sum / (i))































