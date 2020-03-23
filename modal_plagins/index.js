const fruits = [
  { id: 1, title: "Apple", price: 20, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jindeal.com%2Fproduct%2Fvedini-apple-fragrance-oil%2F&psig=AOvVaw36okGrJcpKbMmqLhRaulw0&ust=1585033384305000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKD2-NGDsOgCFQAAAAAdAAAAABAD' },
  { id: 2, title: "Orange", price: 20, img: 'https://www.lgssales.com/wp-content/uploads/2017/07/darling-oranges-1.png' },
  { id: 3, title: "Mango", price: 20, img: 'https://stegforhalsa.se/wp-content/uploads/2017/03/F%C3%B6rdelar-med-mango.jpg?width=1200&enable=upscale' }
]

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


