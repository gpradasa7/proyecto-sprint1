const GetData = async endPoint => {
  let { data } = await axios.get(
    `https://realme-api.herokuapp.com/${endPoint}`
  );

  return data;
};

export default GetData;
