import { ShowCart } from "../modules/showCart.js";
const listCart = document.querySelector(".cartProperties");

document.addEventListener("DOMContentLoaded", () => {
  const properties = JSON.parse(localStorage.getItem("carrito"));

  ShowCart(properties, listCart);
});

document.addEventListener("click", ({ target }) => {
  if (target.classList.contains("navCart")) {
    window.location.href = "../pages/favorites.html";
  }

  if (target.classList.contains("navCart")) {
    window.location.href = "../pages/cart.html";
  }
});

listCart.addEventListener("click", e => {
  const btnEliminar = e.target.classList.contains("delCart");
  // traer el id
  const id = e.target.id;
  const getObjArray = JSON.parse(localStorage.getItem("carrito"));
  const searchId = getObjArray.find(data => data.id === Number(id));

  if (btnEliminar) {
    getObjArray.forEach(index => {
      if (data => data.id === searchId.id) {
        //splice nos permite eliminar en posicion del arreglo
        //el index es la posicion y el 1 es la cantidad de elementos a eliminar
        getObjArray.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(getObjArray));
        window.location.href = "../pages/cart.html";
      }
    });
  }
});
