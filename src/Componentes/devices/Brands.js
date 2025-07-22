import Tablet from "/public/serviciotecnico/laptop.webp"


import iphonex from "/public/imagenes/iphonex.jpeg";
import iphonexr from "/public/imagenes/iphonexr.jpeg";
import iphonexs from "/public/imagenes/iphonexs.jpeg";
import iphonese2022 from "/public/imagenes/iphonese(2022).jpeg";
import iphonese2020 from "/public/imagenes/iphonese(2020).jpeg";
import iphonese from "/public/imagenes/iphonese.jpeg";
import iphone16promax from "/public/imagenes/iphone16promax.jpeg";
import iphone16pro from "/public/imagenes/iphone16pro.jpeg";
import iphone16plus from "/public/imagenes/iphone16plus.jpeg";
import iphone16e from "/public/imagenes/iphone16e.jpeg";
import iphone16 from "/public/imagenes/iphone16.jpeg";
import iphone15promax from "/public/imagenes/iphone15promax.jpeg";
import iphone15pro from "/public/imagenes/iphone15pro.jpeg";
import iphone15plus from "/public/imagenes/iphone15plus.jpeg";
import iphone15 from "/public/imagenes/iphone15.jpeg";
import iphone14promax from "/public/imagenes/iphone14promax.jpeg";
import iphone14pro from "/public/imagenes/iphone14pro.jpeg";
import iphone14plus from "/public/imagenes/iphone14plus.jpeg";
import iphone14 from "/public/imagenes/iphone14.jpeg";
import iphone13promax from "/public/imagenes/iphone13promax.jpeg";
import iphone13pro from "/public/imagenes/iphone13pro.jpeg";
import iphone13 from "/public/imagenes/iphone13.jpeg";
import iphone13mini from "/public/imagenes/iphone13mini.jpeg";
import iphone12promax from "/public/imagenes/iphone12promax.jpeg";
import iphone12pro from "/public/imagenes/iphone12pro.jpeg";
import iphone12 from "/public/imagenes/iphone12.jpeg";
import iphone11promax from "/public/imagenes/iphone11promax.jpeg";
import iphone11pro from "/public/imagenes/iphone11pro.jpeg";
import iphone11 from "/public/imagenes/iphone11.jpeg";
import iphone8 from "/public/imagenes/iphone8.jpeg";
import iphone8plus from "/public/imagenes/iphone8plus.jpeg";
import iphone7 from "/public/imagenes/iphone7.jpeg";
import iphone7plus from "/public/imagenes/iphone7plus.jpeg";
import iphone6 from "/public/imagenes/iphone6.jpeg";
import iphone6s from "/public/imagenes/iphone6s.jpeg";
import iphone6splus from "/public/imagenes/iphone6splus.jpeg";
import iphone5 from "/public/imagenes/iphone5.jpeg";
import iphone5c from "/public/imagenes/iphone5c.jpeg";
import iphone5s from "/public/imagenes/iphone5s.jpeg";
import iphone4 from "/public/imagenes/iphone4.jpeg";
import iphone4s from "/public/imagenes/iphone4.jpeg";

const BRANDS = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    models: [
      { name: "Iphone x", image: iphonex },
      { name: "iphone 5", image: iphone5 },
      { name: "iPhone 4", image: iphone4 },
      { name: "iPhone 4s", image: iphone4s },
      { name: "iPhone 5", image: iphone5 },
      { name: "iPhone 5c", image: iphone5c },
      { name: "iPhone 5s", image: iphone5s },
      { name: "iPhone 6", image: iphone6 },
      { name: "iPhone 6s", image: iphone6s },
      { name: "iPhone 6s Plus", image: iphone6splus },
      { name: "iPhone 7", image: iphone7 },
      { name: "iPhone 7 Plus", image: iphone7plus },
      { name: "iPhone 8", image: iphone8 },
      { name: "iPhone 8 Plus", image: iphone8plus },
      { name: "iPhone X", image: iphonex },
      { name: "iPhone XR", image: iphonexr },
      { name: "iPhone XS", image: iphonexs },
      { name: "iPhone SE", image: iphonese },
      { name: "iPhone SE 2020", image: iphonese2020 },
      { name: "iPhone SE 2022", image: iphonese2022 },
      { name: "iPhone 11", image: iphone11 },
      { name: "iPhone 11 Pro", image: iphone11pro },
      { name: "iPhone 11 Pro Max", image: iphone11promax },
      { name: "iPhone 12", image: iphone12 },
      { name: "iPhone 12 Pro", image: iphone12pro },
      { name: "iPhone 12 Pro Max", image: iphone12promax },
      { name: "iPhone 13", image: iphone13 },
      { name: "iPhone 13 Mini", image: iphone13mini },
      { name: "iPhone 13 Pro", image: iphone13pro },
      { name: "iPhone 13 Pro Max", image: iphone13promax },
      { name: "iPhone 14", image: iphone14 },
      { name: "iPhone 14 Plus", image: iphone14plus },
      { name: "iPhone 14 Pro", image: iphone14pro },
      { name: "iPhone 14 Pro Max", image: iphone14promax },
      { name: "iPhone 15", image: iphone15 },
      { name: "iPhone 15 Plus", image: iphone15plus },
      { name: "iPhone 15 Pro", image: iphone15pro },
      { name: "iPhone 15 Pro Max", image: iphone15promax },
      { name: "iPhone 16", image: iphone16 },
      { name: "iPhone 16e", image: iphone16e },
      { name: "iPhone 16 Plus", image: iphone16plus },
      { name: "iPhone 16 Pro", image: iphone16pro },
      { name: "iPhone 16 Pro Max", image: iphone16promax },
    ],
  },
  {
    name: "Honor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Honor_Logo.svg",
    models: ["Honor 70", "Honor X8", "Honor 50"],
  },
  {
    name: "Huawei",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Huawei_logo.svg",
    models: ["P30 Pro", "Mate 40", "Nova 9"],
  },
  {
    name: "Motorola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Motorola_logo.svg",
    models: ["Moto G100", "Moto Edge 20", "Moto E7"],
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    models: ["Galaxy S22", "Galaxy A52", "Galaxy Note 10"],
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
    models: ["Redmi Note 10", "Mi 11", "Poco F3"],
  },
];

export default BRANDS;

const DEVICE_TYPES = [
  {
    name: "Smartphone",
    image: "Tablet"
  }
]