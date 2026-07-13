const cartData = require("./modulesExamples/addToCartModules")
const { productName, producPrice } = require("./modulesExamples/cartProcessModule")

let userName = "Arslan"
let userAge = 20
console.log(userName, userAge) 

cartData(["Bag", "Phone", "Suit"])
cartData([])

 
console.log(productName("Pixel 7 | 256GB"))
console.log(producPrice('Rs:5000'))