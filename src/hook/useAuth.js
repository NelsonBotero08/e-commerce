import axios from "axios";

const useAuth = () => {
  const registerUser = (user) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    axios
      .post(url, user)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  const loginUser = (credentials) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
    axios
      .post(url, credentials)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch((e) => console.log(e));
  };

  return { registerUser, loginUser };
};

export default useAuth;
