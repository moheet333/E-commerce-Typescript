"use strict";
let x = {
    id: 0,
    name: "apple",
    description: "watch",
    prize: 200,
    isSold: false,
};
class manageProducts {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(id) {
        this.products.filter((item) => item.id !== id);
    }
    getItems() {
        return this.products;
    }
}
