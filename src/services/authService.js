import axios from "axios";

const BASE_URL = "http://localhost:3000/users";

const signUP = async (newUser) => {
  try {
    const res = await axios.get(`${BASE_URL}?email=${newUser.email}`);
    if (res.data.length > 0) {
      return { success: false, message: "email is already registered" };
    }
    axios.post(BASE_URL, newUser);
    return { success: true, message: "successfully registered" };
  } catch (error) {
    return { success: false, message: `Error occured : ${error.message}` };
  }
};
const signIn = async () => {};

export { signUP, signIn };
