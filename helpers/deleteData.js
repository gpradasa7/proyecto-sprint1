const DeleteData = async endPoint => {
  try {
    // peticion con axios
    await axios.delete(`https://realme-api.herokuapp.com/${endPoint}`);
    alert("Eliminaciòn exitosa");
  } catch (error) {
    console.log("error en ejecución");
  }
};

export default DeleteData;
