import ecommerce from "../images/ecommerce.jpg";
import moviesearch from "../images/moviesearch.jpg";
import password from "../images/password.webp";
let ecommerceimg = ecommerce;
let showsearchimg = moviesearch;
let passwordimg = password;

export const ProductData = [
  {
    title: "Ecommerce app",
    url: "https://ecommercewebapplica.netlify.app/",
    src: ecommerceimg,
  },
  {
    title: "Showsearch app",
    src: showsearchimg,
    url: "https://showsearchapplication.netlify.app/",
  },
  {
    title: "Password generator",
    url: "https://generatepasswordweb.netlify.app/",
    src: passwordimg,
  },
];
