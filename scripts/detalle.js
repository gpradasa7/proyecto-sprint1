import GetData from "../helpers/getData.js";
import PostData from "../helpers/postData.js";

const favSection = document.querySelector(".navFavorite");
const cartSection = document.querySelector(".navCart");
const detalle = document.querySelector(".detalle");
let favArray = [];
let carritoArray = [];
document.addEventListener("DOMContentLoaded", () => {
  const properties = JSON.parse(localStorage.getItem("detalle"));
  const {
    typeproperty,
    id,
    name,
    image1,
    image2,
    image3,
    available,
    price,
    location,
    roomnumber,
    bathroomnumber,
    squaremeters,
    houseinteligent,
    parking,
    pool,
    privacysecurity,
    medicalcenter,
    libraryarea,
    kingsizebed,
    playzone,
  } = properties;

  detalle.innerHTML = ` <div class="row">
    <div class="col s12 m8">
      <img class="main-image-detalle z-depth-2 responsive-img" src="${image1}" alt="main image">
    <div class="mini-images-detalle">
      <div class="col s12 m3 responsive-img">
        <img src="${image2}" alt="mini-1">
      </div>
      <div class="col s12 m3 responsive-img">
        <img src="${image3}" alt="mini-2">
      </div>
      <div class="col s12 m3 responsive-img">
        <img src="${image1}" alt="mini-3">
      </div>
    </div>
    </div>
    <div class="col s12 m4">
      <ul class="collection">
        <li class="collection-item avatar">

          <span class="title">name: ${name}</span>
          <p>type property: ${typeproperty}<br>
            price: ${price}
          </p>

        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle">folder</i>
          <span class="title">location: ${location}</span>
          <p>room number: ${roomnumber}<br>
            bathroom number: ${bathroomnumber}
          </p>

        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle green">insert_chart</i>
          <span class="title">square-meters: ${squaremeters}</span>
          <p>available: ${available}<br>
          </p>

        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle red">play_arrow</i>
          <span class="title">house-inteligent: ${houseinteligent} parking: ${parking} pool:  ${pool} </span>
          <p>privacy-security: ${privacysecurity} medical-center: ${medicalcenter} library area:  ${libraryarea}<br>
            king-size-bed: ${kingsizebed} playzone: ${playzone}
          </p>
        </li>
       <li>
          <a id="${id}" class="waves-effect waves-light btn-small favorites"><i class="material-icons left ">star</i>Añadir a
            favoritos</a>
          <a id="${id}"class="waves-effect waves-light btn-small cart"><i class="material-icons left">shopping_cart</i>Añadir al Carrito</a>
        </li>
      </ul>
    </div>
  </div>`;
});

document.addEventListener("click", async ({ target }) => {
  const data = await GetData("houses");
  //FAVORITOS
  if (target.classList.contains("favorites")) {
    let favoritosStorage = data.find(item => item.id == target.id);
    const key = JSON.parse(localStorage.getItem("favorites"));

    if (key !== null) {
      // si existe
      PostData("favoritos", key);
      key.unshift(favoritosStorage);
      localStorage.setItem("favorites", JSON.stringify(key));
    } else {
      favArray.push(favoritosStorage);
      localStorage.setItem("favorites", JSON.stringify(favArray));
    }
  }
  //CARRITO

  if (target.classList.contains("cart")) {
    let cartStorage = data.find(item => item.id == target.id);
    const key = JSON.parse(localStorage.getItem("cart"));

    if (key !== null) {
      // si existe
      PostData("carrito", key);
      key.unshift(cartStorage);
      localStorage.setItem("cart", JSON.stringify(key));
    } else {
      carritoArray.push(cartStorage);
      localStorage.setItem("cart", JSON.stringify(carritoArray));
    }
  }
});

document.addEventListener("click", ({ target }) => {
  if (target.classList.contains("navFavorite")) {
    window.location.href = "../pages/favorites.html";
  }

  if (target.classList.contains("navCart")) {
    window.location.href = "../pages/cart.html";
  }
});
