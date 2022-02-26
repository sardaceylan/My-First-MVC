const products = [
    { id: "13213", name: 'IPhone 6', price: '2000', imageUrl: '1.jpg', description: 'iyi telefon', categoryId: 1 },
    { id: "86934", name: 'IPhone 7', price: '3000', imageUrl: '2.jpg', description: 'iyi telefon', categoryId: 1 },
    { id: "52345", name: 'Huawei Matebook', price: '3000', imageUrl: '2.jpg', description: 'tablet gibi bir bilgisayar', categoryId: 2 },
    { id: "75634", name: 'iMac Pro', price: '3000', imageUrl: '2.jpg', description: 'devrim niteliğinde bir klasik', categoryId: 2 },
    { id: "52345", name: 'Beko', price: '3000', imageUrl: '2.jpg', description: 'teknolojinin sınırlarını zorladık', categoryId: 3 }
];

module.exports = class Product {

    constructor(name, price, imageUrl, description) {
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    saveProduct() {
        products.push(this)
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        return products.find(i => i.id == id);
    }

    static getProductsByCategoryId(categoryId) {
        return products.filter(i => i.categoryId === categoryId);
    }

    static Update(product) {
        const index = products.findIndex(i => i.id === product.id);

        products[index].name = product.name;
        products[index].price = product.price;
        products[index].imageUrl = product.imageUrl;
        products[index].description = product.description;
    }

    static DeleteById(id) {
        const index = products.findIndex(i => i.id === id);
        products.splice(index, 1);
    }
}