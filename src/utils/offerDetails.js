import burgerOne from "../assets/burgerOne.png";
import burgerTwo from "../assets/burgerTwo.png";
import burgerThree from "../assets/burgerthree.png";
import burgerFour from "../assets/burgFour.png";
import burgerFive from "../assets/burgFive.png";
import burgerSix from "../assets/burgSix.png";

export const offerDetails = [
  {
    id: "b1",
    name: "Chilli Vegan",
    price: 8.99,
    desc: "Healthy plant based burger, served with lettuce, tomatoes,avocado, lemon and olive oil dressing. ",
    img: burgerOne,
  },
  {
    id: "b2",
    name: "Hearty Chilli",
    price: 10.99,
    desc: "Grass fed double cheese burger, served with tomatoes lettuce, jalapegnos and our secret mayo sauce. ",
    img: burgerTwo,
  },
  {
    id: "b3",
    name: "Mediterranean Surpise",
    price: 7.99,
    desc: "Provolone cheese mixed with oregano, chicken breast, salad dressing and a dash of mayo. ",
    img: burgerThree,
  },
  {
    id: "b4",
    name: "Chicken Supreme",
    price: 11.99,
    desc: "Healthy plant based burger, served with lettuce, tomatoes,avocado, lemon and olive oil dressing. ",
    img: burgerFour,
  },
  {
    id: "b5",
    name: "Heat Wave",
    price: 15.99,
    desc: "Grass fed double cheese burger, served with tomatoes lettuce, jalapegnos and our secret mayo sauce. ",
    img: burgerFive,
  },
  {
    id: "b6",
    name: "The Royale",
    price: 17.99,
    desc: "Provolone cheese mixed with oregano, chicken breast, salad dressing and a dash of mayo. ",
    img: burgerSix,
  },
];

// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

// https://firebasestorage.googleapis.com/v0/b/spiced-burger.appspot.com/o/burgerOne.png?alt=media&token=

// https://firebasestorage.googleapis.com/v0/b/spiced-burger.appspot.com/o/burgerTwo.png?alt=media&token=

// https://firebasestorage.googleapis.com/v0/b/spiced-burger.appspot.com/o/burgerthree.png?alt=media&token=

// https://firebasestorage.googleapis.com/v0/b/spiced-burger.appspot.com/o/burgFour.png?alt=media&token=

// https://firebasestorage.googleapis.com/v0/b/spiced-burger.appspot.com/o/burgFive.png?alt=media&token=

// https://firebasestorage.googleapis.com/v0/b/spiced-burger.appspot.com/o/burgSix.png?alt=media&token=
