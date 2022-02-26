const categories = [
    { id: "1", name: "Telefon", description: "Telefon kategori ürünleri" },
    { id: "2", name: "Bilgisayar", description: "Telefon kategori ürünleri" },
    { id: "3", name: "Beyaz Eşya", description: "Telefon kategori ürünleri" },
]


module.exports = class Category {
    constructor(name, description) {
        this.id = (categories.length + 1).toString();
        this.name = name;
        this.description = description;
    };

    SaveCategory() {
        categories.push(this);
    }

    static GetAll() {
        return categories;
    }

    static GetById(id) {
        return categories.find(id => id.id === id);
    }

    static Update(category) {
        const index = categories.findIndex(i => i.id === category.id);
        categories[index].name = category.name;
        categories[index].description = category.description;
    }

    static DeleteById(id) {
        const index = categories.findIndex(i => i.id === id);
        categories.splice(index, 1);

    }
}