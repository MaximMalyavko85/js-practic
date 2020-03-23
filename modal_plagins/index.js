let fruits = [
  { id: 1, title: "Apple", price: 50, img: 'https://lh3.googleusercontent.com/proxy/uLyYLMiv3giNBoWzhAxdm2lKnxssttPI-l9cSHnDHCP4qNRLuXY-nqRHv07Lr6TMJNE0m7JMbrrpBlZoQNQ_VoNXcBXIYcOTxmWUfqR58Qbd' },
  { id: 2, title: "Orange", price: 10, img: 'https://i.dlpng.com/static/png/1221617-orange-png-image-free-download-png-picture-of-orange-2305_2577_preview.png' },
  { id: 3, title: "Mango", price: 21, img: 'https://media.istockphoto.com/photos/mango-isolated-on-white-background-picture-id911274308?k=6&m=911274308&s=612x612&w=0&h=WjFtDBD8zVP6HP7fpYvrPvZyNRU_qkRRGCymS3SX5GQ=' }
]

const toHTML = fruit => `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${fruit.img}" alt="${fruit.title}">
  <div class="card-body">
    <h5 class="card-title">${fruit.title}</h5>
    <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
  </div>
  </div>
`;

function render() {
  const html = fruits.map(toHTML).join('');

  document.querySelector("#fruits").innerHTML = html;
}

render();

const priceModal = $.modal({
  title: "Price to product",
  closable: true,
  width: "400px",
  footerButtons: [
    { text: "Close", type: "primary", handler() { priceModal.close() } }
  ]
});


document.addEventListener("click", event => {
  event.preventDefault();
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;     //+ -> toNumber;
  const fruit = fruits.find(f => f.id === id);

  if (btnType === 'price') {

    priceModal.setContent(
      `<p>Price to ${fruit.title}: <strong>${fruit.price}$</strong></</p>`
    )
    priceModal.open();

  } else if (btnType === "remove") {
    $.confirm({
      title: "Are you sure",
      content: `<p> You delete fruit <strong>${fruit.title}</strong></p > `
    }).then(() => {
      fruits = fruits.filter(f => f.id !== id);
      render();
    })
      .catch((e) => {
        console.log("Cancel")
      })
  }
})


