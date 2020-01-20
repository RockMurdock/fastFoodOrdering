const restaurant = {
    name: "Bob's Burgers",
    order: [],
    placeOrder: function (meal) {
        this.order.push(meal)
    },
    allOrders: function () {
        console.log(this.order)
    }
}

const chickenComboMeal = {
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Medium"
}

const fishComboMeal = {
    sandwichType: "Fish",
    fries: true,
    drinkSize: "Medium"
}

const hamburgerComboMeal = {
    sandwichType: "Burger",
    fries: true,
    drinkSize: "Medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(fishComboMeal)
restaurant.placeOrder(hamburgerComboMeal)

// Invoke the function to return the list of all orders
 restaurant.allOrders()
// Output all orders to the console using console.table()
console.table(restaurant.order)