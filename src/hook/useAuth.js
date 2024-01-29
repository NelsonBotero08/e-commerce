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

  const verifyCode = async (code) => {
    const url = `http://localhost:8080/users/verify/${code}`;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error("Error verifying code:", error);
      throw error;
    }
  };

  return { registerUser, loginUser, verifyCode };
};

export default useAuth;
