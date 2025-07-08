// console.log("HELLO WORLD");
// console.log(a);
// var a=123;
// console.log(a);

// function abc(){
//     console.log("THIS IS FUNC ABC");

//     function hgf(){
//         console.log("this is func hgf");
//     }
//     hgf();
// }
// abc();

// arrow func
// xyz();
// var xyz=()=>{
//     console.log("this is xyz");
// }

// console.log(b);
// let b=300;
// {
//     // compound statement

//     var a=100;
//     var b=200;
//     var c=300;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(x);
//     {
//         // parent
//         console.log(a);
//         console.log(a);
//         console.log(a);
//     }
//     {
//         // child
//        var x=10021;
//        console.log(a);
//        console.log(b);
//        console.log(c);
//     }
// }
// function abc(){
//     var a=100;
//     var b=200;
//     var c=300;
// function def(){
//     var d=400;
//     function ijk(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
//  ijk();
// }
// def();
// }
// abc();

// for(var i=0;i<=5;i++){
//     setTimeout(()=>{
//     console.log(i);
//    },2000)
// }
// for(var i=0;i<=5;i++){
//   function  closure(i){
//     setTimeout(()=>{
//     console.log(i);
//    },2000)
// }closure(i) 
// }

// HOF
// function xyz(cb){
//     console.log("i am fgfdcgh");
//     cb();
// }
// function cb(){
//     console.log("kjmhgfd");
// }
// xyz(cb);

// function xyz(){
//     return function(){
//         console.log("kmlnjbhcgfx");
//     };
// }
// xyz()();
// setTimeout(()=>{
//     console.log("i am going to restaurant");
// },4000);

// setTimeout(()=>{
//     console.log("i am checking the order");
// },3000);

// function walkINrestaurant(cb){
//     console.log("i am walking inside");
//    setTimeout(cb,3000);
   
// }

// function menucheck(cb){
//     console.log("i am checking the menue");
//     setTimeout(cb,2000);
// }

// function foodorder(cb){
//     console.log("i am ordering the food");
//     setTimeout(cb,6000);
// }

// function havinglunch(cb){
//     console.log("i am having lunch");
//     setTimeout(cb,8000);
// }

// function paybill(cb){
//     console.log("i am paying the bill");
//     setTimeout(cb,3000);
// }

// function walkout(){
//     console.log("Bye bye");
//     // setTimeout(cb,6000);
// }
// walkINrestaurant(()=>{
//     menucheck(()=>{
//         foodorder(()=>{
//             havinglunch(()=>{
//                 paybill(()=>{
//                     walkout();
//                 })
//             })
//         })
//     })
// })
// this structure is pyramid of doom 
             
// console.log("SCRIPT END");


// let arr=[2,3,4,6,8];

// function doublearrval(arr){
//     let ar=[];
//     for(let i=0;i<arr.length;i++){
//         ar[i]=2*arr[i];
//       }
// return ar;
// }
// let a=doublearrval(arr);
// console.log(a);
// console.log(arr);
// let arr=[2,3,4,6,8];

// Array.prototype.doublearrval=function(arr){
//     let ar=[];
//     for(let i=0;i<arr.length;i++){
//         ar.push(2*arr[i]);
//       }
// return ar;
// }
// function triple(x){
//     return x*x*x;
// }

// //hw

// console.log(ar.doublearrval(arr));

// let cart=["shoes","shirt","wallets"]

// function order(cart){
//     // 1.total number of product
//     return (cart.length,cart.length*1000);
//     // total amount of product nos*1000
// }

// function oredersumary(){
//     // total price and total product
//     // then generate order id 

// }

// function payment(){
//     // order id,product details,pricing

// }

// function successfulorder(){
//     // it will give all the details about payment product name and everything
// }

// //filter
// Array.prototype.mapReplica=function(logic){
//     let output=[]
//     for(var i=0;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;

// }

// function doubleaval(x){
   
    
// }
// Array.prototype.myFilter = function(callback) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             newArr.push(this[i]);
//         }
//     }
//     return newArr;

// };
// Example usage
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.myFilter(num => num % 2 === 0);
// console.log(evenNumbers); 

// let arr1= [1, 2, 3, 4, 5];
// const sum=arr1.reduce(function (acc,curr){
//         acc=acc+curr
//         return acc;
// },0);

// console.log(sum);

// function welcome(welcomemsg,goodbyeMsg){
//         console.log(welcomemsg+" "+this.name+"is a student of class"+this.group+" "+goodbyeMsg);
// }

// const stud1={
//         name:"Tanisha",
//         group:"g4",
// }

// const stud2={
//         name:"Sharma",
//         group:"g4",
// }

// call
// welcome.call(stud1,"gm","bye");
// welcome.call(stud2,"hello","bye kid");

// bind
// const s1=welcome.bind(stud1,["gm","bye"]);
// const s2=welcome.bind(stud2,"hello","bye kid");

// console.log(s1());
// console.log(s2());


// CURRYING

// normal func
// function sumofthree(a,b,c){
//         console.log(a+b+c);
// }

// sumofthree(10,20,30);

// curried func
// function sumofthree(a){
//         return function(b){
//                 return function(c){
//                         console.log(a+b+c);
//                 }
//         }
// }
// console.log(sumofthree(20)(30)(40));

// // we use currying because we need outerscope like we cant choose petty without bread without bread patty we cant choose cheese
// function choosebread(bread){
//         return function(patty){
//                 return function(cheese){
//                         console.log(bread+patty+cheese);
//                 }
//         }
// }

const grandparent=document.getElementById(grandparent);
const parent=document.getElementById(parent);
const child=document.getElementById(child);


grandparent.addEventListener("click",()=>{
        
})