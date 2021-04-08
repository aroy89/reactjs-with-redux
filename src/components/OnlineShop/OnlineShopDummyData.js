const makeProduct = ({ name, productId, imageUrl, price, offerPrice }) => ({
  name,
  productId,
  imageUrl,
  price,
  offerPrice,
});

export const products = [
  makeProduct({
    name: "iPhone12",
    productId: "1001",
    imageUrl: "./images/img1.jpg",
    price: "₹79,900.00",
    offerPrice: "₹69,900.00",
  }),
  makeProduct({
    name: "OnePlus smart TV",
    productId: "1002",
    imageUrl: "./images/img2.jpg",
    price: "₹62,899",
    offerPrice: "₹58,899.00",
  }),
  makeProduct({
    name: "Canon EOS 1500D",
    productId: "1003",
    imageUrl: "./images/img3.jpg",
    price: "₹39,900.00",
    offerPrice: "₹36,900.00",
  }),
  makeProduct({
    name: "Sheesham Bed",
    productId: "1005",
    imageUrl: "./images/img4.jpg",
    price: "₹34,499.00",
    offerPrice: "₹33,499.00",
  }),
  makeProduct({
    name: "WD Green",
    productId: "1006",
    imageUrl: "./images/img5.jpg",
    price: "₹3,165.00",
    offerPrice: "₹3,065.00",
  }),
  makeProduct({
    name: "Puma Jacket",
    productId: "1007",
    imageUrl: "./images/img6.jpg",
    price: "₹2,919.00",
    offerPrice: "₹2,619.00",
  }),
];
