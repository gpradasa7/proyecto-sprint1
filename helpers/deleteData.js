const DeleteData = async url => {
  try {
    // peticion con axios
    await axios.delete(url);
  } catch (error) {
    console.log("error en ejecución");
  }
};

export default DeleteData;
