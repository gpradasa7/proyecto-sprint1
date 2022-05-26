const PutData = async (endPoint, object = {}) => {
  try {
    // let data = await res.json();
    await axios.put(`https://realme-api.herokuapp.com/${endPoint}`, object);
    alert("Información actualizada");
  } catch (error) {
    alert("Hubo un error", error);
    console.log(error);
  }
};

export default PutData;
