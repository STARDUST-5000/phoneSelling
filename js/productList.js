let productList = [];

const fetchProducts = async () => {
  console.log(123);
  try {
    const res = await axios({
      url: "https://6336fc7e5327df4c43cdbfc2.mockapi.io/Products",
      method: "GET",
    });
    console.log(res);
    renderProductList(productList);
  } catch (err) {
    console.log(err);
  }
};

const renderProductList = (data) => {
  var productHTML = "";
  for (let i in data) {
    productHTML += data[i].render(+i + 1);
  }
  productHTML += `
  <div>${this.name}</div>
  <div>${this.price}</div>
  <div>${this.screen}</div>
  <div>${this.blackCamera}</div>
  <div>${this.frontCamera}</div>
  <div>${this.img}</div>
  <div>${this.desc}</div>
  <div>${this.type}</div>`;
  document.getElementById("productItem").innerHTML = productHTML;
  console.log(productList);
};

const mapData = (dataFromAPI) => {
  const showProduct = [];

  dataFromAPI.forEach((show) => {
    const { name, price, screen, blackCamera, frontCamera, img, desc, type } =
      show;

    showProduct.push(
      productList(
        name,
        price,
        screen,
        blackCamera,
        frontCamera,
        img,
        desc,
        type
      )
    );
  });
};

window.onload = () => {
  fetchProducts();
};
