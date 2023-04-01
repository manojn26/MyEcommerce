// list products file
import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Manoj",
      email: "admin@example.com",
      // we can encrypt the password
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
      isSeller: false,
    },
    {
      name: "Kumar",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
      isSeller: false,
    },
  ],
  products: [
    {
      // make id with mongo db compatability
      // _id: "1",
      name: "Nike",
      slug: "nike-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 700,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      descriptions: "high quality shirts",
    },

    {
      // _id: "2",
      name: "Addidas",
      slug: "addidas-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 800,
      countInStock: 20,
      brand: "Addidas",
      rating: 4.5,
      numReviews: 10,
      descriptions: "high quality shirts",
    },

    {
      // _id: "3",
      name: "Nike Slim Pant",
      slug: "nike-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 900,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      descriptions: "high quality product",
    },

    {
      // _id: "4",
      name: "Adidas Fit Pant",
      slug: "nike-fit-pant",
      category: "Pants",
      image: "/images/p4.png",
      price: 850,
      countInStock: 5,
      brand: "Addidas",
      rating: 4.5,
      numReviews: 10,
      descriptions: "high quality shirts",
    },
  ],
};
export default data;
