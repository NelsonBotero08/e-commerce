import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [infoApi, setInfoApi] = useState();

  const getApi = (url) => {
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((e) => console.log(e));
  };
  return [infoApi, getApi];
};

export default useFetch;
