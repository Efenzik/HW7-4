import shopData from "../data/data";
import Handlebars from "handlebars";
import shopSource from "bundle-text:../templates/template.hbs";

const cointainer = document.querySelector(".shop-list");

const palleteTemplate = Handlebars.compile(shopSource);
const shopHTML = palleteTemplate(shopData);
console.log(shopHTML);

cointainer.innerHTML = shopHTML;
