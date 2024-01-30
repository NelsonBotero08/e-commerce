import axios from "axios";

const useAuth = () => {
  const registerUser = async (user) => {
    const url = "http://localhost:8080/users";
    try {
      const res = await axios.post(url, user);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  };

  const loginUser = async (credentials) => {
    const url = "http://localhost:8080/users/login";
    try {
      const res = await axios.post(url, credentials);
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  };

  return { registerUser, loginUser };
};

export default useAuth;
