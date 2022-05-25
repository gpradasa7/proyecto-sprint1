const PutData = async (url, object = {}) => {
  try {
    // let data = await res.json();
    await axios.put(url, object);
    alert("Información actualizada");
  } catch (error) {
    alert("Hubo un error", error);
  }
};

export default PutData;
