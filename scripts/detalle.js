import GetData from "../helpers/getData.js";

const detalle = document.querySelector(".detalle");

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
  const {
    typeproperty,
    id,
    name,
    image1,
    available,
    price,
    location,
    roomnumber,
    bathroomnumber,
    squaremeters,
  } = data;

  if (target.classList.contains("favorites")) {
    const favorites = data.find(item => item.id == target.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  if (target.classList.contains("favorite")) {
    window.location.href = "../pages/favorites.html";
  }
});
