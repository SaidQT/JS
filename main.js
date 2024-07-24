// // //First One
 var hello;
 console.log(hello);                                   
 hello = 'world';                                 
// // //Expected output= undefined 
// // //Real output= undefined
// // // Second One
var needle = 'haystack';
 function test(){
     var needle = 'magnet';
     console.log(needle);
 }
 test();
// // //Expected output= magnet 
// // //Real output= magnet
// // //Third One
 var brendan;
 brendan = 'super cool';
function print(){
    brendan = 'only okay';
     console.log(brendan);
 }
console.log(brendan);
// // //Expected output= super cool
// // //Real output= super cool
// // //Fourth one
var food;
 food = 'chicken';
 console.log(food);
function eat(){
    var food;
    food = 'half-chicken';
     console.log(food);
    food = 'gone';
}
 eat();
// // //Expected output= chicken, half-chicken
// // //Real output= chicken, half-chicken
// // //Fifth one
 var mean = function() {
     var food;
   food = "chicken";
     console.log(food);
    food = "fish";
    console.log(food);
    }
 mean();
 console.log(food);

 console.log(food);
// // //Expected output= chicken, fish, reference error
// // //Real output= chicken, fish,chicken, reference error
// // // Sixth one
var genre;
console.log(genre);
 genre = "disco";
 function rewind() {
   var genre;
         genre = "rock";
         console.log(genre);
         genre = "r&b";
        console.log(genre);
    }
 rewind();

console.log(genre);
// //expected out=  undefined, rock, r&b, disco
// //real output=undefined, rock, r&b, disco
// //Seventh one
dojo = "san jose";
console.log(dojo);
function learn() {
        var dojo;
        dojo = "seattle";
      console.log(dojo);
     dojo = "burbank";
    console.log(dojo);
   }
 learn();

 console.log(dojo);
//expected output= san jose, seattle, burbank, sanjose
//real output=san jose, seattle, burbank, sanjose
//Last one
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }
    
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//expected :1- {name:chicago, students:65, hiring:true} 2- {name:Berkley, students:0, hiring:"closed for now"} 
//real :{name: 'Chicago', students: 65, hiring: true}
//main.js:98
// Uncaught TypeError TypeError: Assignment to constant variable.
//     at makeDojo (c:\Users\HomePC\Desktop\main.js:93:18)
//     at <anonymous> (c:\Users\HomePC\Desktop\main.js:99:13)
//     at Module._compile (internal/modules/cjs/loader:1358:14)
//     at Module._extensions..js (internal/modules/cjs/loader:1416:10)
//     at Module.load (internal/modules/cjs/loader:1208:32)
//     at Module._load (internal/modules/cjs/loader:1024:12)
//     at executeUserEntryPoint (internal/modules/run_main:174:12)
//     at <anonymous> (internal/main/run_main_module:28:49)






