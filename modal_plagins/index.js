const fruits = [
  { id: 1, title: "Apple", price: 20, img: 'https://lh3.googleusercontent.com/proxy/uLyYLMiv3giNBoWzhAxdm2lKnxssttPI-l9cSHnDHCP4qNRLuXY-nqRHv07Lr6TMJNE0m7JMbrrpBlZoQNQ_VoNXcBXIYcOTxmWUfqR58Qbd' },
  { id: 2, title: "Orange", price: 20, img: 'https://i.dlpng.com/static/png/1221617-orange-png-image-free-download-png-picture-of-orange-2305_2577_preview.png' },
  { id: 3, title: "Mango", price: 20, img: 'https://media.istockphoto.com/photos/mango-isolated-on-white-background-picture-id911274308?k=6&m=911274308&s=612x612&w=0&h=WjFtDBD8zVP6HP7fpYvrPvZyNRU_qkRRGCymS3SX5GQ=' }
]

const toHTML = fruit => `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${fruit.img}" alt="${fruit.title}">
  <div class="card-body">
    <h5 class="card-title">${fruit.title}</h5>
    <a href="#" class="btn btn-primary">Посмотреть цену</a>
    <a href="#" class="btn btn-danger">Удалить</a>
  </div>
  </div>
`;

function render() {
  const html = fruits.map(toHTML).join('');

  document.querySelector("#fruits").innerHTML = html;
}

render();

const modal = $.modal({
  title: "Maxim Modal",
  closable: true,
  width: "400px",
  footerButtons: [
    { text: "Ok", type: "primary", handler() { modal.close() } },
    { text: "Cancel", type: "danger", handler() { modal.close() } }
  ],
  content: `
      <p>lorem working on display flex.</p>
  `,
});


