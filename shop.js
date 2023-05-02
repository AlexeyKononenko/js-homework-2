const goods = [
     {
        id: 1,
        name: "футболка",
        description: "цвет - синий",
        sizes: ["S", "M", "XL"],
        price: 1500,
        available: true,
    },
     {
        id: 2,
        name: "рубашка",
        description: "цвет - белый",
        sizes: ["S", "M", "XL"],
        price: 3000,
        available: true,
    },
    {
        id: 3,
        name: "худи",
        description: "цвет - черный",
        sizes: ["S", "M", "XL"],
        price: 5000,
        available: true,
    },
     {
        id: 4,
        name: "куртка",
        description: "цвет - черный",
        sizes: ["S", "M", "XL"],
        price: 15000,
        available: true,
    },
    {
        id: 5,
        name: "кардиган",
        description: "цвет - зеленый",
        sizes: ["S", "M", "XL"],
        price: 7000,
        available: true,
    }
]

const basket = [
    {
        good: 2,
        amount: 10
    },{
        good: 4,
        amount: 6
    },{
        good: 1,
        amount: 6
    }
    
]

function addGood(idGood, quantity) {
    basket.push({good:idGood,amount:quantity})
    return basket 
}

function delGood(idGood) {
    for(let i = 0; i < basket.length; i++) {
        if (basket[i].good == idGood) {
             basket.splice(i, 1); 
        }
    }
    return basket 
    }
   
 function cleanBasket() {
        basket.splice(0, basket.length)
        return basket  
 }

function total() {
    res = {
        'totalAmount': 0,
        'totalSumm': 0
    }
    for (let i = 0; i < basket.length; i++){
        res.totalAmount += basket[i].amount
         res.totalSumm += goods[basket[i].good].price * basket[i].amount
    }
     
    
    return res
}



// console.log(addGood(process.argv[2],process.argv[3]))

// console.log(delGood(process.argv[2]))

console.log(cleanBasket())



// console.log(total())