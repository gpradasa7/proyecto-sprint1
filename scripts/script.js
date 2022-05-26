import GetData from "../helpers/getData.js";
import { ShowCard } from "../modules/showCard.js";

//pintar propiedades en la section 2 de la main page

const container = document.getElementById("containerProperties");

document.addEventListener("DOMContentLoaded", async () => {
  const data = await GetData("houses");
  ShowCard(data, container);
});

document.addEventListener("click", async ({ target }) => {
  const data = await GetData("houses");

  if (target.classList.contains("select")) {
    const properties = data.find(item => item.id == target.id);
    localStorage.setItem("detalle", JSON.stringify(properties));
    window.location.href = "../pages/detalle.html";
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
