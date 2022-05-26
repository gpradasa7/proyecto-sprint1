import { ShowFavorite } from "../modules/showFavorites.js";
const listFavorites = document.querySelector(".listFavorites");

document.addEventListener("DOMContentLoaded", () => {
  const properties = JSON.parse(localStorage.getItem("favorites"));

  ShowFavorite(properties, listFavorites);
});

document.addEventListener("click", ({ target }) => {
  if (target.classList.contains("navFavorite")) {
    window.location.href = "../pages/favorites.html";
  }

  if (target.classList.contains("navCart")) {
    window.location.href = "../pages/cart.html";
  }
});

listFavorites.addEventListener("click", e => {
  const btnEliminar = e.target.classList.contains("delFavorite");
  // traer el id
  const id = e.target.id;
  const getObjArray = JSON.parse(localStorage.getItem("favorites"));
  const searchId = getObjArray.find(data => data.id === Number(id));

  if (btnEliminar) {
    getObjArray.forEach(index => {
      if (data => data.id === searchId.id) {
        //splice nos permite eliminar en posicion del arreglo
        //el index es la posicion y el 1 es la cantidad de elementos a eliminar
        getObjArray.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(getObjArray));
        window.location.href = "../pages/favorites.html";
      }
    });
  }
});
