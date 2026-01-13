import { useLoaderData } from "react-router-dom";
import { getSelectedUser } from "../services/apiUsers.js";

const UserDetail = () => {
  const userDetail = useLoaderData();

  const { name, email, username } = userDetail;

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export const loader = async ({ params }) => {
  const userDetail = await getSelectedUser(params.id);
  return userDetail;
};

export default UserDetail;
