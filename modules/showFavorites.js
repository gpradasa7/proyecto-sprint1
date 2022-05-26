const ShowFavorite = (data = [], container) => {
  container.innerHTML = "";
  data.forEach(item => {
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
      houseinteligent,
      parking,
      pool,
      privacysecurity,
      medicalcenter,
      libraryarea,
      kingsizebed,
      playzone,
    } = item;
    container.innerHTML += `
    
  <div class="row select">
    <div class="col s12 m4 select">
      <div class="card togglecart-2 z-depth-4 select" id="${id}">
        <div class="card-image select" id="${id}">
          <img src="${image1}" class="select" id="${id}">
          <span class="available select" id="${id}">${available}</span>
          <span class="card-title price select">${price}/mo</span>
        </div>
        <div class="description-togglecart-2">
          <h5 class="type-property left select" id="${id}">${typeproperty}</h5>
          <h3 class="name-property left select" id="${id}">${name}</h3>
          <div class="location-property select" id="${id}"><img src="../images/map-pin.png"><span> ${location}</span>
          </div>
          <div class="details-property left" id="${id}"><span class="bed-number"><img src="../images/bed.png">Beds
              ${roomnumber}</span><span class="bath-number" id="${id}"><img src="../images/bath.png">Baths
              ${bathroomnumber}</span><span class="sqft-number"><img id="${id}" src="../images/size.png">${squaremeters}
              Sqft</span>
            <button class="delFavorite waves-effect waves-light btn-small red" id="${id}">Eliminar Favorito</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });
};

export { ShowFavorite };
