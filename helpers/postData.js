const PostData = async (url, object = {}) => {
  try {
    // let data = await res.json();
    await axios.post(url, object);

    alert("Información creada");
  } catch (error) {
    alert("Hubo un error", error);
  }
};

export default PostData;
