const fs = require('fs');
const path = require('path');


const Products = {
    productsJson: path.join(__dirname, '../data/flights.json'),
    productsData: function() {
        return JSON.parse(fs.readFileSync(this.productsJson, 'utf-8'))
    },

    generateId: function() {
        let allProducts = this.productsData();
        let lastProduct = allProducts.pop();
        if(lastProduct){
            return lastProduct.id + 1;
        }
        return 1;
    },

    findById: function(id) {
        let allProducts = this.productsData();
        let ProductFound = allProducts.find(oneProduct => oneProduct.id === id);
        return ProductFound
    },

    findByField: function(field, text) {
        let allProducts = this.productsData();
        let ProductFound = allProducts.find(oneProduct => oneProduct[field] === text);
        return ProductFound
    },

    create: function(newproduct) {
        let allProducts = this.productsData();
        let product = {
            id: this.generateId(),
            ...newproduct
        }
        allProducts.push(product);
        fs.writeFileSync(this.productsJson, JSON.stringify(allProducts, null, ' '), 'utf-8');
        return product
    },

    delete: function(id) {
        let allProducts = this.productsData();
        let finalproducts = allProducts.filter(oneProduct => oneProduct.id !== id);
        fs.writeFileSync(this.productsJson, JSON.stringify(finalproducts, null, ' '), 'utf-8');
        return true
    }
}

module.exports = Products;