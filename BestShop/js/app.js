const calcSelected = document.querySelector('.calc__select');
const selectInput = document.querySelector('.select__input');
const selectDropdown = document.querySelector('.select__dropdown');

const basicPackPrice = 0;
const professionalPackPrice = 25;
const premiumPackPrice = 60;

const summaryTotal = document.querySelector('.summary__total');
const totalPrice = document.querySelector('.total__price');


calcSelected.addEventListener('click', function() {
    this.classList.toggle('open');
});

const packageData = document.querySelector('[data-id="package"]');

selectDropdown.children[0].addEventListener('click', function () {
    selectInput.innerText = "Basic";
    packageData.classList.add('open');
    summaryTotal.classList.add('open');
    packageData.children[1].innerText = 'Basic';
    packageData.children[2].innerText = '$' + basicPackPrice;
});

selectDropdown.children[1].addEventListener('click', function () {
    selectInput.innerText = "Professional";
    packageData.classList.add('open');
    summaryTotal.classList.add('open');
    packageData.children[1].innerText = 'Professional';
    packageData.children[2].innerText = '$' + professionalPackPrice;
});

selectDropdown.children[2].addEventListener('click', function () {
    selectInput.innerText = "Premium";
    packageData.classList.add('open');
    summaryTotal.classList.add('open');
    packageData.children[1].innerText = 'Premium';
    packageData.children[2].innerText = '$' + premiumPackPrice;
});

const accountingData = document.querySelector('[data-id="accounting"]');
const rentalData = document.querySelector('[data-id="terminal"]');
const checkboxes = document.querySelectorAll('.form__checkbox');
const checkbox1 = checkboxes[0];
const checkbox2 = checkboxes[1];

const accountingPrice = 40;
const rentalPrice = 20;

checkbox1.addEventListener('click', function () {
    if (this.children[0].checked) {
        accountingData.classList.add('open');
        summaryTotal.classList.add('open');
    } else {
        accountingData.classList.remove('open');
    }

    accountingData.children[1].innerText = '$' + accountingPrice;

});

checkbox2.addEventListener('click', function() {
    if (this.children[0].checked) {
        rentalData.classList.add('open');
        summaryTotal.classList.add('open');
    } else {
        rentalData.classList.remove('open');
    }
    rentalData.children[1].innerText = '$' + rentalPrice;
});

const productsData = document.querySelector('[data-id="products"]');
const ordersData = document.querySelector('[data-id="orders"]');
const inputProducts = document.querySelector('#products');
const inputOrders = document.querySelector('#orders');

const productPrice = 1.5;
const orderPrice = 0.5;

inputProducts.addEventListener('keyup', function(){
    const productQuantity = this.value;

    if (this.value >= 0) {
        productsData.children[1].innerText = productQuantity + " * " + "$" + productPrice;
        summaryTotal.classList.add('open');
    }
    if (this.value === '') {
        productsData.children[1].innerText = "0 * " + "$" + productPrice;
        summaryTotal.classList.add('open');
    }
    let productsCost = productQuantity * productPrice;

    productsData.children[2].innerText = '$' + productsCost;
    return productsCost;
});



inputProducts.addEventListener('click', function(){
    const productQuantity = this.value;

    productsData.classList.add('open');
    summaryTotal.classList.add('open');


    if (this.value >= 0) {
        productsData.children[1].innerText = productQuantity + " * " + "$" + productPrice;
    }
    if (this.value === '') {
        productsData.children[1].innerText = "0 * " + "$" + productPrice;
    }
    const productsCost = productQuantity * productPrice;

    productsData.children[2].innerText = '$' + productsCost;
    return productsCost;
});

inputOrders.addEventListener('keyup', function(){
    const ordersQuantity = this.value;

    ordersData.classList.add('open');
    summaryTotal.classList.add('open');

    if (this.value >= 0) {
        ordersData.children[1].innerText = ordersQuantity + " * " + "$" + orderPrice;
    }
    if (this.value === '') {
        ordersData.children[1].innerText = "0 * " + "$" + orderPrice;
    }
    const ordersCost = ordersQuantity * orderPrice;

    ordersData.children[2].innerText = '$' + ordersCost;
    return ordersCost;
});

inputOrders.addEventListener('click', function(){
    const ordersQuantity = this.value;

    ordersData.classList.add('open');
    summaryTotal.classList.add('open');

    if (this.value >= 0) {
        ordersData.children[1].innerText = ordersQuantity + " * " + "$" + orderPrice;
    }
    if (this.value === '') {
        ordersData.children[1].innerText = "0 * " + "$" + orderPrice;
    }
    const ordersCost = ordersQuantity * orderPrice;

    ordersData.children[2].innerText = '$' + ordersCost;
    return ordersCost;
});


















