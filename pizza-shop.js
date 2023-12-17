const events = require("node:events")

class PizzaShop extends events{
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, toppings){
        this.orderNumber++;
        this.emit("order",size,toppings);
    }

    displayOrderNumber(){
        console.log(`your order number is ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;