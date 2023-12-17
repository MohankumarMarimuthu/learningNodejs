const PizzaShop = require("./pizza-shop.js");
const Beverage = require("./beverage.js")
const dominozPizza = new PizzaShop()
const kfc = new PizzaShop()
const drink = new Beverage()


dominozPizza.on("order", (size, toppings) => {
    console.log(`the order was taken urs is ${size} pizza with ${toppings}`)
    drink.serveDrink(size)
})
dominozPizza.order("large","mushroom & chicken");
dominozPizza.displayOrderNumber();

kfc.on("order" , (size, toppings) => {
    console.log(`the order was taken urs is ${size} pizza with ${toppings}`)
    drink.serveDrink(size)
})

kfc.order("medium" , "panner")
kfc.displayOrderNumber();