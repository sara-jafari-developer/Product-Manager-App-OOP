import Product from './classes/Product.js';

document.addEventListener('DOMContentLoaded', () => {
    let close = document.querySelectorAll('.close');
    let modal = document.querySelector('.modal-keeper');
    let addProduct = document.querySelector('.add-product');
    let create = document.querySelector('.create');
    let title = document.querySelector('.title');
    let price = document.querySelector('.price');
    let image = document.querySelector('.image');
    let background = document.querySelector('.background');
    let productList = document.querySelector('.product-list');

    const ProductClass = new Product(productList, modal);

    close.forEach(btn => {
        btn.addEventListener('click', () => ProductClass.closeForm());
    });

    addProduct.addEventListener('click', () => ProductClass.openForm());

    create.addEventListener('click', createProduct);

    async function createProduct() {
        let isCreated = await ProductClass.create(title, price, image, background);

        if (isCreated) {
            title.value = '';
            price.value = '';
            image.value = '';
            background.value = '';
        }
    }

    ProductClass.loadProducts();
});