import axios from "axios";

// const BASE_URL = "https://randomuser.me/api/";
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// export const getAllUser = async () => {
//   try {
//     const { data } = await axios(BASE_URL);
//     console.log(data.results);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getSelectedUser = async (id) => {
  try {
    const { data } = await axios(`${BASE_URL}/${id}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
