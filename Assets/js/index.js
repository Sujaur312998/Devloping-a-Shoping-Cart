let shop=[
    {
        id: 0,
        name: 'iPhone 12',
        image: '../image/iPhone.jpg',
        price: '150000'
    },
    {
        id: 1,
        name: 'Laptop',
        image: '../image/laptop.jpg',
        price: '180000'
    },
    {
        id: 2,
        name: 'Shoe',
        image: '../image/shoes.jpg',
        price: '150000'
    },
    {
        id: 3,
        name: 'Toy',
        image: '../image/toy.jpg',
        price: '150000'
    }
]
console.log(shop.length)
//UI interface
//let cardImg= document.querySelector("#cardImg")
let cardTitle= document.querySelector("#cardTitle")
let button= document.querySelector("#button")

function generatedCard  (item,index) {
        
        console.log(item)
    
    
    
}

let getItem=shop.map((item,index)=>{
    generatedCard(item,index)
})
