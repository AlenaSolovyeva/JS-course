const products = [
  { id: 1, title: "Notebook", price: 2000 },
  { id: 2, title: "Mouse", price: 20 },
  { id: 3, title: "Keyboard", price: 200 },
  { id: 4, title: "Gamepad", price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (x) =>
`<div class="product-item" style="border: 2px solid grey; margin: 5px; padding: 10 px; display: inline-block">
        <img
            src="./pineapple.jpg"
            width="360"
            height="420"
            alt="product"
        />
        <h3 style="padding-left:5px; color: grey">${x.title}</h3>
        <p style="padding-left:5px; color: grey">${x.price}</p>
        <button class="buy-btn" style="margin-left:5px; border:none; padding: 10px">Купить</button>
    </div>`;

const renderPage = (list) => {
  list.forEach((item) => {
    document.querySelector(".products").innerHTML += renderProduct(item);
  });
};

renderPage(products);
