import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [infoApi, setInfoApi] = useState();

  const cb = () => ({});

  const getApi = (url, getConfig = cb) => {
    axios
      .get(url, getConfig)
      .then((res) => setInfoApi(res.data))
      .catch((e) => console.log(e));
  };
  return [infoApi, getApi];
};

export default useFetch;
