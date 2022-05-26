const PostData = async (endPoint, object = {}) => {
  try {
    // let data = await res.json();
    await axios.post(`https://realme-api.herokuapp.com/${endPoint}`, object);

    alert("Información creada");
  } catch (error) {
    alert("Hubo un error");
    console.log(error);
  }
};

export default PostData;
