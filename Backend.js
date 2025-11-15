const main = document.querySelector('#main');

const section = main.firstElementChild;

const article = section.firstElementChild;

const h1 = article.firstElementChild;

const div = h1.nextElementSibling; // CartColors div


const products = div.children;

const cart = main
    .firstElementChild
    .lastElementChild

console.log(cart)

const productArray = Array.from(products);
console.log(productArray);

productArray.forEach( (p) => {
    p.addEventListener('click', () => {
        const h5 = document.createElement('h5');
        h5.innerText = p.firstElementChild
                        .firstElementChild
                        .nextElementSibling
                        .firstElementChild
                        .innerText

                        
        cart.appendChild(h5);
        h5.classList.add('p-2', 'text-lg', 'border-b', 'border-black', 'mb-2');
    })
})


