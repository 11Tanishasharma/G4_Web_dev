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
// console.log("hello");
// const grandparent=document.getElementById("grandparent");
// const parent=document.getElementById("parent");
// const child=document.getElementById("child");


// grandparent.addEventListener("click",()=>{
//     console.log("grandparent clicked!!!"); 
// },true)

// parent.addEventListener("click",()=>{
//     console.log("parent clicked!!"); 
// },true)

// child.addEventListener("click",()=>{
//     console.log("child clicked!"); 
// },true)
const products = [
    { productName: "Vegetable", description: "Very nutrious", price: 1000 },
    { productName: "Fruits", description: "very healthy", price: 800 },
    { productName: "ice cream", description: "Tasty but eat in moderation!", price: 600 },
];

function fetchProducts() {
    return products.map(product => ({
        name: product.productName,
        description: product.description,
        price: product.price
    }));
}

function displayProducts() {
    const container = document.getElementById('products-container');
    
    fetchProducts().forEach(product => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <hr>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);