interface Product {
    readonly id: number,
    name: string,
    description: string,
    prize: number,
    isSold: boolean,
}

let x: Product = {
    id: 0,
    name: "apple",
    description: "watch",
    prize: 200,
    isSold: false,
}

class manageProducts {
    private products: Product[] = []

    addProduct(product: Product) {
        this.products.push(product)
    }

    removeProduct(id: number) {
        this.products.filter((item) => item.id !== id)
    }

    getItems(): Product[] {
        return this.products
    }

}